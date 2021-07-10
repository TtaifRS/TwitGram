import './post.css';
import { MoreVert, ThumbUpAlt } from '@material-ui/icons';

const Post = () => {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/4.jpg"
              alt="name"
              className="postProfilePic"
            />
            <span className="postUserName">Sofia Chung</span>
            <span className="postTime">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Beautiful scene</span>
          <img src="/assets/post/8.jpeg" alt="train" className="postImg" />
        </div>
        <div className="postBottom">
          <span className="postLike">32 like</span>
          <ThumbUpAlt htmlColor="#652EAD" className="postLikeIcon" />
        </div>
      </div>
    </div>
  );
};

export default Post;
