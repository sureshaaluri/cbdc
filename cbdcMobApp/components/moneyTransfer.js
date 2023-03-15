import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, Button,Alert} from 'react-native';
import Header from './header';
import {Dropdown} from 'react-native-element-dropdown';
import { userInfoContext } from "./userContext";
import {API_KEY} from '@env'

const data = [
  { label: 'Patient', value: 'patient' },
  { label: 'Provider', value: 'Provider' }
];

export default function MoneyTransfer({navigation,route}) {

  const [PatientDetails, setPatientDetails] = useState([{}]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [AccAddress, setAccAddress] = useState(false);
  const [currency,setAmount] = useState("");
  let {user,setuser}       =   React.useContext(userInfoContext);

  // console.log("user ",user.UserDetails)

  function Account(event) {
    setAccAddress(event);
  }

  function Amount(event) {
    setAmount(event);
  }

  // useEffect(() => {
  //   async function provInfo() {
  // const res = await fetch("http://192.168.2.106:4000/getProvider", {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data =await res.json();
  //   // console.log('data ' + JSON.stringify(data.data));
    
  //     if (data) {
  //       setPatientDetails(data.data)
  //       setIsFocus(false);
  //     }
  //   } 
  //     provInfo();
  //   },[])
const setOnchange = async e =>{
  
    setIsFocus(false);
  if(e.value == "patient"){


    const res = await fetch(API_KEY+"/getPatient", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    // console.log('data ' + JSON.stringify(data.data));
    
      if (data) {
        setPatientDetails(data.data)
        setIsFocus(false);
      }
 
    // console.log("PatientDetails ",PatientDetails);
  }else{


    const res = await fetch(API_KEY+"/getProvider", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    // console.log('data ' + JSON.stringify(data.data));
    
      if (data) {
        setPatientDetails(data.data)
        setIsFocus(false);
      }
 
    // console.log("PatientDetails ",PatientDetails);
  }
    
}

const WalletTransfer = async e => {
  
  const toAccAddr = AccAddress.AccountAddress+'-'+AccAddress.email+'-'+AccAddress.name;
  const accAddr_patient = user.UserDetails.AccountAddress+"-"+user.UserDetails.mempool+"-"+user.UserDetails.wallet+"-"+user.UserDetails.email+"-"+user.UserDetails.name

  if(!currency || !toAccAddr || !accAddr_patient){
    Alert.alert('Error ', 'Fill all the fields', [
      {text: 'okay', onPress: () => console.log('alert closed') }
    ]);
  }

const res = await fetch(API_KEY+"/mobWalletTansfer",{
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:  JSON.stringify({
        currency, toAccAddr,accAddr_patient
    })
})

const data = await res.json();

if(res.status==201){
  if(data.Patient){
    Alert.alert('Success ', 'Transferred funds successfully', [
          {text: 'okay', onPress: () => navigation.navigate('WalletScreen',{data:user})}
        ]);
    
  }
}else if(res.status==400){
  Alert.alert('Error ', 'Insufficient Balance In Account', [
    {text: 'okay', onPress: () => console.log('alert closed') }
  ]);
}


}

  return (
    <View>
    <Header />
      <View style={styles.Container}>
      <Text style={styles.label1}>Role :</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Receiver Role' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={setOnchange}
        />
       
       
       <>
        <Text style={styles.label1}>Receiver :</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={PatientDetails}
          search
          maxHeight={300}
          labelField="name"
          valueField="AccountAddress"
          placeholder={!isFocus ? 'Select Provider ' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={Account}
        />
        </>

        <Text style={styles.label1}>Amount : </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          onChangeText={Amount}
        />
        <View style={styles.buttonContainer}>
          <Button title="Transfer" onPress={WalletTransfer}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Container: {
      marginLeft: '20%',
    },
    buttonContainer: {
      marginTop: 10,
      width: '30%',
      marginBottom: 20,
      justifyContent: 'center',
    },
    subHeading :{ 
      fontSize: 20,
      marginBottom: 10, 
      marginTop: 10, 
      fontWeight:"bold"
    },
    label1: {
      marginTop: 10,
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '70%',
      borderRadius: 5,
      padding: 10,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    dropdown: {
      width: '70%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
  });