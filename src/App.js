import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {userAtom} from "./Atom"
import {useRecoilValue} from "recoil"

function App() {

 
  const user = useRecoilValue(userAtom)

  useEffect(()=>{
    fetch(`https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/${user.gameName}/${user.network}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY
    }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  },[])
  



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
