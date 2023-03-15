import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button,Alert} from 'react-native';
import Header from './header';
import {Dropdown} from 'react-native-element-dropdown';
import { userInfoContext } from "./userContext";
import {API_KEY} from '@env'

const data = [
  { label: 'Patient', value: 'patient' },
  { label: 'Insurer Agent', value: 'insurance_agent' },
  { label: 'Provider', value: 'Provider' }
];

export default function Login({navigation, route}) {
  
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [otp, setotp] = useState();
  const [checkOTP, setCheckotp] = useState();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [Result, setResult] = useState();
  const [walletBalance, setWalletBalance] = useState()
  let {user,setuser}       =   React.useContext(userInfoContext);

  function LoginUser(event) {
    setUsername(event);
  }

  function onchangeOTP(event) {
    setCheckotp(event);
  }

  function LoginPassword(event) {
    setPassword(event);
  }
  const LoginFunction = async e => {

    e.preventDefault();

    console.log(API_KEY+'/walletLogin');
    const role = value;
  
    const res = await fetch(API_KEY+'/walletLogin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        role,
      }),
    });
    
    const data = await res.json();
    

    if (res.status === 422 || !data) {
      Alert.alert('Error ', 'Fill all the fields', [
        {text: 'okay', onPress: () => console.log('alert closed')}
      ]);
    } else if (res.status === 423 || !data || data == undefined) {
      Alert.alert('Login ', 'Login Details Incorrect', [
        {text: 'okay', onPress: () => console.log('alert closed') }
      ]);
    } else {
      if (data.token) {
        
        console.log('Login Successfully');
        setotp(data.otp)
        setResult(data)
        
        
      }
    }

  };

  const CheckOTP = async e => {
    
    if(checkOTP == otp){
      // console.log("result ",Result)
    await setuser(Result)
     
      navigation.navigate('WalletScreen',{data:Result})
    }else{
      Alert.alert('Login ', 'Enter Correct OTP', [
        {text: 'okay', onPress: () => console.log('alert closed') }
      ]);
    }
  }


  return (
    <>
    <Header />
      <View style={styles.Container}>
        
        {otp ? 
          <>
          <Text style={styles.label1}>OTP : </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            onChangeText={onchangeOTP}
          />
          <View style={styles.buttonContainer}>
            <Button title="Check OTP" onPress={CheckOTP} />
          </View>
          </>
        
        : 

        <>
        <Text style={{fontSize: 25, marginBottom: 20}}>LOGIN</Text>
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
          placeholder={!isFocus ? 'Select Role' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <Text style={styles.label1}>Username :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          onChangeText={LoginUser}
        />
        <Text style={styles.label1}>Password : </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={LoginPassword}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={LoginFunction} />
        </View>
        </>
        
         }
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',
    borderRadius: 5,
    padding: 10,
  },
  Container: {
    marginTop: '20%',
    marginLeft: '20%',
  },
  label1: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: '30%',
    marginBottom: 20,
    justifyContent: 'center',
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
});
