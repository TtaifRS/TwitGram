import React from 'react';
import './feed.css';

import Share from '../Share';

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  );
};

export default Feed;
