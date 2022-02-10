import React from 'react'
import './Song.css'

function Song({ track, playSong }) {
    console.log(track);
    return (
      <div className="song" onClick={() => playSong(track.id)}>
        <img className="song__album" src={track.album.images[0].url} alt="" />
        <div className="song__info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.album.name}
          </p>
        </div>
      </div>
    );
  }

export default Song