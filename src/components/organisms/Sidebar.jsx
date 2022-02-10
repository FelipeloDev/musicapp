import React from 'react'
import OptionSide from '../molecules/OptionSide'
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "../atoms/spotifyData";
import { useStateValue } from "../../StateProvider";
import { Avatar } from '@material-ui/core';


function Sidebar() {
  const [{ playlists, user }, dispatch] = useStateValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      <OptionSide Icon={HomeIcon} option="Home" />      
      <OptionSide Icon={LibraryMusicIcon} option="Favorites" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <OptionSide option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar