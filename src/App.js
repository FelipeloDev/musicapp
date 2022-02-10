import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromResponse } from './components/atoms/spotifyData';
import Login from './components/pages/Login';

function App() {

  const [token, setToken]=useState(null);


  useEffect( ()=>{
      const token = getTokenFromResponse();
      window.location.hash = "";
      const tempToken = hash.accesstempToken;

      if (tempToken){
        setToken(tempToken)
      }

    },[]  );



  return (
    <div className="app">
      {
        token ? (
          <h2>Logged In</h2>       
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
