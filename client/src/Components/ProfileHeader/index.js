import './profileHeader.css';

const ProfileHeader = () => {
  return (
    <>
      <div className="profileHeaderImages">
        <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
        <img src="/assets/person/8.jpeg" alt="" className="profileAvatar" />
      </div>
      <div className="profileInfo">
        <h4 className="profileUserName">Julia Brown</h4>
        <span className="profileUserDesc">Hello Everyone</span>
      </div>
    </>
  );
};

export default ProfileHeader;
