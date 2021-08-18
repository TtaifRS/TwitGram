import './post.css'
import { MoreVert, ThumbUpAlt } from '@material-ui/icons'
import { format } from 'timeago.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                src={
                  user.profilePicture || PublicFolder + 'person/noAvatar.png'
                }
                alt=""
                className="postProfilePic"
              />
            </Link>

            <span className="postUserName">{user.username}</span>
            <span className="postTime">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PublicFolder + post?.img} alt="" className="postImg" />
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
  )
}

export default Post
