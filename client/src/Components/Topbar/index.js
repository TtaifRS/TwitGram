import React from 'react';
import './topBar.css';

import { Search, Person, Chat, Notifications, Menu } from '@material-ui/icons';

import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">TwitGram</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post and video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/8.jpeg" alt="" className="topbarImg" />
        <Menu className="menuIcon" />
      </div>
    </div>
  );
};

export default TopBar;
