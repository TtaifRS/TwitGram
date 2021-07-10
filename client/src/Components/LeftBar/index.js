import React from 'react';
import './leftBar.css';

import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';

const leftbarDatas = [
  {
    Icon: RssFeed,
    title: 'Feeds',
  },
  {
    Icon: Chat,
    title: 'Chats',
  },
  {
    Icon: PlayCircleFilledOutlined,
    title: 'Videos',
  },
  {
    Icon: Group,
    title: 'Groups',
  },
  {
    Icon: Bookmark,
    title: 'Bookmarks',
  },
  {
    Icon: HelpOutline,
    title: 'Questions',
  },
  {
    Icon: WorkOutline,
    title: 'Jobs',
  },
  {
    Icon: Event,
    title: 'Events',
  },
  {
    Icon: School,
    title: 'courses',
  },
];

const leftbarFriendsData = [
  {
    src: '/assets/person/1.jpg',
    name: 'Jane Doe',
  },
  {
    src: '/assets/person/2.jpg',
    name: 'John Doe',
  },
  {
    src: '/assets/person/3.jpg',
    name: 'James Ben',
  },
  {
    src: '/assets/person/4.jpg',
    name: 'Janie Bond',
  },
  {
    src: '/assets/person/5.jpg',
    name: 'Jim Helpert',
  },
  {
    src: '/assets/person/1.jpg',
    name: 'Jane Doe',
  },
  {
    src: '/assets/person/2.jpg',
    name: 'John Doe',
  },
  {
    src: '/assets/person/3.jpg',
    name: 'James Ben',
  },
  {
    src: '/assets/person/4.jpg',
    name: 'Janie Bond',
  },
  {
    src: '/assets/person/5.jpg',
    name: 'Jim Helpert',
  },
  {
    src: '/assets/person/1.jpg',
    name: 'Jane Doe',
  },
  {
    src: '/assets/person/2.jpg',
    name: 'John Doe',
  },
  {
    src: '/assets/person/3.jpg',
    name: 'James Ben',
  },
  {
    src: '/assets/person/4.jpg',
    name: 'Janie Bond',
  },
  {
    src: '/assets/person/5.jpg',
    name: 'Jim Helpert',
  },
  {
    src: '/assets/person/1.jpg',
    name: 'Jane Doe',
  },
  {
    src: '/assets/person/2.jpg',
    name: 'John Doe',
  },
  {
    src: '/assets/person/3.jpg',
    name: 'James Ben',
  },
  {
    src: '/assets/person/4.jpg',
    name: 'Janie Bond',
  },
  {
    src: '/assets/person/5.jpg',
    name: 'Jim Helpert',
  },
  {
    src: '/assets/person/1.jpg',
    name: 'Jane Doe',
  },
  {
    src: '/assets/person/2.jpg',
    name: 'John Doe',
  },
  {
    src: '/assets/person/3.jpg',
    name: 'James Ben',
  },
  {
    src: '/assets/person/4.jpg',
    name: 'Janie Bond',
  },
  {
    src: '/assets/person/5.jpg',
    name: 'Jim Helpert',
  },
];

const LeftBar = () => {
  return (
    <div className="leftbarContainer">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          {leftbarDatas.map((data, index) => {
            const { Icon, title } = data;
            return (
              <li className="leftbarListItem" key={index}>
                <Icon className="leftbarIcon" />
                <span className="leftbarListItemTtile">{title}</span>
              </li>
            );
          })}
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <h3 className="leftbarh3">Friends</h3>
        <ul className="leftbarFriendList">
          {leftbarFriendsData.map((data, index) => {
            const { src, name } = data;
            return (
              <li className="leftbarFriend" key={index}>
                <img src={src} alt={name} className="leftbarFriendImage" />
                <span className="leftbarFriendname">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
