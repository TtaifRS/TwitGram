import './post.css';
import { MoreVert, ThumbUpAlt } from '@material-ui/icons';

import { Users } from '../dummyData';
import { useState } from 'react';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt="name"
              className="postProfilePic"
            />
            <span className="postUserName">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postTime">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img
            src={PublicFolder + post?.photo}
            alt="train"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <span className="postLike">
            {like}
            <span style={{ color: 'rgba(255,255,255,.5)', marginLeft: '6px' }}>
              people liked this post
            </span>
          </span>
          <ThumbUpAlt
            htmlColor="#652EAD"
            className="postLikeIcon"
            onClick={likeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
