import React from 'react';
import TopBar from '../../Components/Topbar';
import LeftBar from '../../Components/LeftBar';
import RightBar from '../../Components/RightBar';
import Feed from '../../Components/Feed';
import ProfileHeader from '../../Components/ProfileHeader';

import './profilePage.css';
const ProfilePage = () => {
  return (
    <>
      <TopBar />
      <div className="profileContainer">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <ProfileHeader />
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
