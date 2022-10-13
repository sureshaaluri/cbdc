import React from 'react';
import Registration from './components/registration'
import Mint from './components/mint'
import About from './components/about'
import Balance from './components/balance';
import SendCurrency from './components/sendCurrency'
import Dashboard from './components/dashboard';
import Login from './components/login';
import Receiver from './components/checkReceive';
import Header from './components/header';
import NewAddress from './components/newAddress';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <Router>
      <Header />
        <Switch>
          <Route exact path="/"><Dashboard /></Route> 
          <Route exact path="/about"><About /></Route> 
          <Route exact path="/mint"><Mint /></Route> 
          <Route exact path="/sendCurrency"><SendCurrency /></Route> 
          <Route exact path="/receiverCheck"><Receiver /></Route> 
          <Route exact path="/balance"><Balance /></Route> 
          <Route exact path="/login"><Login /></Route> 
          <Route exact path="/register"><Registration /></Route> 
          <Route exact path="/newAddress"><NewAddress /></Route> 
        </Switch>
      </Router>
  );
}

export default App;
