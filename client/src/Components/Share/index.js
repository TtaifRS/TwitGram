import './share.css';

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

const datas = [
  {
    Icon: PermMedia,
    text: 'Photo or Video',
    color: 'tomato',
  },

  {
    Icon: Label,
    text: 'Tag',
    color: '#0a0ad1',
  },
  {
    Icon: Room,
    text: 'Location',
    color: '#14ad2b',
  },
  {
    Icon: EmojiEmotions,
    text: 'Feelings',
    color: '#DAA520	',
  },
];

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/8.jpeg" alt="" className="shareProPic" />
          <textarea
            cols="40"
            placeholder="Share your thought, Jennie"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            {datas.map((data, i) => {
              const { Icon, text, color } = data;
              return (
                <div className="shareOption" key={i}>
                  <Icon htmlColor={color} className="shareIcon" />
                  <span className="shareOptionText">{text}</span>
                </div>
              );
            })}
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
