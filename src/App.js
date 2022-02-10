import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromResponse } from './components/atoms/spotifyData';
import Login from './components/pages/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Home from './components/pages/Home';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken]=useState(null);


  useEffect( ()=>{
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let _token = hash.access_token;

      if (_token){
        setToken(_token)
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {

        })
      }

    },[]  );



  return (
    <div className="app">
      {
        token ? (
          <Home/>      
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
