import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(()=>{
    fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/nfamouswun%25231861/battle", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
      "x-rapidapi-key": "44574ae854mshd988c9424075896p1df504jsn70eef846d546"
    }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  },[])
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
