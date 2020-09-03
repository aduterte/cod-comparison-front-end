import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from "./components/Nav"
import UserProfile from './containers/UserProfile';
import GenericProfile from './containers/GenericLookUp';

function App() {

 
  
  



  return (
    <div className="App">
      <Nav/>
      <GenericProfile/>
    </div>
  );
}

export default App;
