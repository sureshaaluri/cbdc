import {StyleSheet, Text, View, Alert, Button} from 'react-native';
import React, { useState,useEffect } from 'react';
import Header from './header';
import Icon from 'react-native-vector-icons/Ionicons';
import { userInfoContext } from "./userContext";
import {API_KEY} from '@env';

export default function WalletScreen({navigation,route}) {
  const [walletBalance, setWalletBalance] = useState()
//   let {user,setuser}       =   React.useContext(userInfoContext);

const getMempoolWallet = route.params.data.UserDetails.mempool+ "-"+route.params.data.UserDetails.wallet

// // console.log('routes data', route.params.data)

//   // const getBalance = async e => { 
    useEffect( () => {
      // console.log("hi iam dashboard")
//       navigation.addListener('focus',async() => {

      
      async function provInfo() {

//         // setuser(route.params.data)

//         // console.log("get params ",route.params.data)
//         console.log("get usecontext details ",user)

    const res = await fetch(API_KEY+"/balance",{
            method:"POST", 
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                getMempoolWallet
            })
        })
        const data = await res.json();
        console.log("daatttttaaaa",data)
        const totalBalance = await data.data.object.balance;
        const getActualBalance = totalBalance.split(",");
//         // const user['walltBal'] = getActualBalance[0];
        setWalletBalance(getActualBalance[1])      

        }
      // })
        provInfo();
      })
  // }

  return (
    <>
    <Header />
      <View style={styles.container}>
      <Text style={styles.wallet}>
      {/* <Icon name="log-out" size={30} color="#4F8EF7"/> */}
      {/* {walletBalance} */}
      {route.params.data.UserDetails.role == "Provider"  ? null :
      <View style={styles.buttonContainer}>
        <Button 
            title="Transfer Funds"
            onPress={() => navigation.navigate('MoneyTransfer')}
          /> 
          
      </View>
      }
      </Text>
          {/* <Text style={styles.wallet}></Text> */}
       
        <Text style={styles.label}>
          UserName :{' '}
          <Text style={styles.value}>{route.params.data.UserDetails.name}</Text>
        </Text>
        {/* <Text style={styles.label}>
          Mempool :{' '}
          <Text style={styles.value}>
            {route.params.data.UserDetails.mempool}
          </Text>
        </Text> */}
        <Text style={styles.label}>
          Wallet :{' '}
          <Text style={styles.value}>
            {route.params.data.UserDetails.wallet}
          </Text>
        </Text>
        <Text style={styles.label}>
          Role :{' '}
          {route.params.data.UserDetails.role == "patient" 
          ?
          <Text style={styles.value}>Patient</Text>
          : null}
          {route.params.data.UserDetails.role == "insurance_agent" 
          ?
          <Text style={styles.value}>Insurer</Text>
          : null}
          {route.params.data.UserDetails.role == "Provider" 
          ?
          <Text style={styles.value}>Provider</Text>
          : null}
        </Text>

        {/* {route.params.data.UserDetails.role == "Provider"  */}
          {/* ? null : */}
          <>
        <Text style={styles.label}>
        {/* UTXOs :{' '} */}
          <Text style={styles.value}>
            {walletBalance}
          </Text>
        </Text>
        {/* <Text style={styles.label}>
        Atomic Units :{' '}
          <Text style={styles.value}>
            {route.params.data.UserDetails.outputValue}
          </Text>
        </Text> */}
        
        {/* <View style={styles.buttonContainer}>
        <Button
            title="Transfer"
            onPress={() => navigation.navigate('MoneyTransfer',{data:route.params.data})}
          />
        
      </View> */}
      </>
       {/* } */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginLeft: '10%',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    fontSize: 18,
  },
  wallet : {
    marginLeft : "50%",
    marginBottom:"10%",
    fontSize: 18,
    fontWeight: 'bold',
  },
  getData : {
    fontWeight: 'bold',
    marginBottom:"10%"
  },
  buttonContainer: {
    width: '50%',
    flexDirection:'row',
    flexWrap:'wrap',
    // marginBottom: 20,
    justifyContent: 'center',
  },

});
