import React from 'react';
import './feed.css';

import Share from '../Share';
import Post from '../Post';
import { Posts } from '../dummyData';

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
