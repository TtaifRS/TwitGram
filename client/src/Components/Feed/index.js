import React from 'react';
import './feed.css';

import Share from '../Share';
import Post from '../Post';

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
