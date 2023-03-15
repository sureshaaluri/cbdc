import {Text, StyleSheet, View, Button} from 'react-native';
import React, {Component} from 'react';
import Header from './header';
// import axios from 'axios';
// import https from 'https';

export default function Home({navigation}) {
  const API_URL = 'https://3.111.249.99';

// const instance = axios.create({
//   baseURL: API_URL,
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false,
//     ca: fs.readFileSync('../certificate.crt'),
//     cert: fs.readFileSync('../certificate.crt'),
//     key: fs.readFileSync('../private.key'),
//   }),
// });

// instance.get('/about')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

  return (
    <View>
    <Header />
      <View style={styles.Container}>
        <Text style={styles.welcome}>Welcome to CBDC</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            color={'green'}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '25%',
    marginBottom: 20,
    justifyContent: 'center',
  },
  Container: {
    alignItems: 'center',
    marginTop: '60%',
  },
  welcome: {
    fontSize: 40,
    marginBottom: 20,
  },
});
