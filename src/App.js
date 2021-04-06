// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// CSS
import './App.css';

// Components
import Signup from './components/Signup'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import Productivity from './components/Productivity'

// Components

function App() {
  // Set state values
 
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <Navbar>Navbar</Navbar>
      <Switch>
      <Route path="/about" component={ About } />
      <Route path="/login" component={ Login } />
      <Route path="/profile" component={ Profile } />
      <Route path="/signup" component={ Signup } />
      <Route path="/productivity" component={ Productivity }/>
      <Route path="/" component={ Welcome } />
      </Switch> 
      <Footer />
    </div>
   
  );
}

export default App;
