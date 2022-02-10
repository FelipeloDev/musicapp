import React from 'react'
import Sidebar from '../organisms/Sidebar';
import './Home.css';


function Home({spotify}) {
  return (
    <div className='body'>
        <div className="player">
            <Sidebar/>
        </div>

    </div>
  )
}

export default Home