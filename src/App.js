import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromResponse } from './components/atoms/spotifyData';
import Login from './components/pages/Login';
import SpotifyWebApi from 'spotify-web-api-js';
import Home from './components/pages/Home';
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {

  
  const [{ user, token }, dispatch] = useStateValue();


  useEffect( ()=>{
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let _token = hash.access_token;

      if (_token){

        dispatch({
          type: "SET_TOKEN",
          token: _token,
        })

        setToken(_token)
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => {
          dispatch({
            type: "SET_USER",
            user,
          })
        })
      }

    },[]  );



  return (
    <div className="app">
      {
        token ? (
          <Home spotify = {spotify}/>      
        ):(
          <Login/>
        )
      }
      
    </div>
  );
}

export default App;
