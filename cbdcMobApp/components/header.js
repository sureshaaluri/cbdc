import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableHighlight,Button} from 'react-native';
import { userInfoContext } from "./userContext";
import { useNavigation } from '@react-navigation/native';
import {API_KEY} from '@env'
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
  const navigation = useNavigation();
  const [walletBalance, setWalletBalance] = useState()
  let {user,setuser}       =   React.useContext(userInfoContext);

  useEffect(()=>{
    console.log(' i am header')
    console.log("user",user)
  },[])

  if(user){
    
    const getMempoolWallet = user.UserDetails.mempool+ "-"+user.UserDetails.wallet


    const res = fetch(API_KEY+"/balance",{
            method:"POST", 
            headers:{
                "Content-Type" : "application/json"
            },
            body:  JSON.stringify({
                getMempoolWallet
            })
        }).then(res=>res.json()).then(info=>{
          
          let walletInfo = info.data.object.balance;

          const getActualBalance = walletInfo.split(",");
          setWalletBalance(getActualBalance[0])
        })
        
}

const Logout = async e => { 
  setuser(null);
  navigation.navigate("Home")
}

  return (
    <>
    <View style={styles.headerbtn}>
      {user ?
      <View style={styles.buttonContainer}>
          <Text style={styles.username}>Welcome, {user.UserDetails.name}</Text>
          <Icon name="log-out-outline" size={28} onPress={Logout}/> 
      </View>
      : null}
      
   
    </View>
    <View style={styles.header}>
    
      <Text style={styles.middle}>CBDC</Text>
      
   
    {user ?
  
      <Text style={styles.right}><Icon name="wallet" size={20} color="#ffffff" style={{paddingRight:5,paddingTop:5}}/> {walletBalance}</Text>
     
      : null}
      
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  headerbtn: {
    padding:2,
    marginTop:5,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: "flex-end",
  },
  username :{
    color:"#000000",
    fontSize:15,
    paddingTop:5,
    paddingRight:25
  },
  header: {
    backgroundColor: '#ff0000',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  middle:{
    width:"50%",
    paddingTop: 10,
    fontWeight:"bold",
    color:"white",
    padding:10,
    fontSize:20
  },
  right:{
    paddingEnd:10,
    paddingTop:10,
    width:"50%",
    fontWeight:"bold",
    textAlign:"right",
    color:"white",
    fontSize:15
  },
  buttonContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'flex-end',
    paddingEnd:10
  },
});
