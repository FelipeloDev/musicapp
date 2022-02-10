import React from 'react'
import Body from '../organisms/Body';
import MusicPlayer from '../organisms/MusicPlayer';
import Sidebar from '../organisms/Sidebar';
import './Home.css';




function Home({spotify}) {
  return (
    <div className='body__container'>
        <div className="player">
            <Sidebar/>
            <Body/>            
        </div>
        <MusicPlayer/>
    </div>
  )
}

export default Home