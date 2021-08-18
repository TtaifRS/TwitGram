import React from 'react'
import './rightBar.css'

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
  {
    src: '/assets/person/10.jpg',
    name: 'Sufi dave',
  },
]

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
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
            const { src, name } = data
            return (
              <li className="rightbarChatFriend" key={i}>
                <div className="rightbarFriendImgContainer">
                  <img src={src} alt="" className="rightbarFriendImage" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarFriendName">{name}</span>
              </li>
            )
          })}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="profileRightbarTitle">User information</h4>
        <div className="profileRightbarInfo">
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">City:</span>
            <span className="profileRightbarInfoValue">Barcelona</span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Country:</span>
            <span className="profileRightbarInfoValue">Spain</span>
          </div>
          <div className="profileRightbarInfoItem">
            <span className="profileRightbarInfoKey">Relationship:</span>
            <span className="profileRightbarInfoValue">Complicated</span>
          </div>
        </div>
        <h4 className="profileRightbarTitle">User friends</h4>
        <div className="profileRightbarFollowings">
          {chatDatas.map((data, i) => {
            const { src, name } = data
            return (
              <div className="profileRightbarFollowing" key={i}>
                <img src={src} alt={name} className="profileRightbarImg" />
                <span className="profileRightbarFollowingName">{name}</span>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default RightBar
