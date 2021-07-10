import React from 'react';
import TopBar from '../../Components/Topbar';
import LeftBar from '../../Components/LeftBar';
import RightBar from '../../Components/RightBar';
import Feed from '../../Components/Feed';

import './homePage.css';
const HomePage = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default HomePage;
