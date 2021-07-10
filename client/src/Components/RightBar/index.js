import React from 'react';
import './rightBar.css';

const chatDatas = [
  {
    src: '/assets/person/2.jpg',
    name: 'Bojak Bastian',
  },
  {
    src: '/assets/person/1.jpg',
    name: 'Megan Joe',
  },
  {
    src: '/assets/person/3.jpg',
    name: 'Birika Bastian',
  },
  {
    src: '/assets/person/4.jpg',
    name: 'John Doe',
  },
  {
    src: '/assets/person/5.jpg',
    name: 'Jan Doe',
  },
  {
    src: '/assets/person/6.jpg',
    name: 'Tilma Muller',
  },
  {
    src: '/assets/person/7.jpg',
    name: 'Sergio Roger',
  },
  {
    src: '/assets/person/9.jpeg',
    name: 'Maria dave',
  },
];

const RightBar = () => {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="/assets/gift.png"
            alt="birthday_image"
            className="birthdayImg"
          />
          <span className="birthdyText">
            <b>Thomas Mullar</b> and <b>2 other friends</b> have birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarChatList">
          {chatDatas.map((data, i) => {
            const { src, name } = data;
            return (
              <li className="rightbarChatFriend" key={i}>
                <div className="rightbarFriendImgContainer">
                  <img src={src} alt="" className="rightbarFriendImage" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarFriendName">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
