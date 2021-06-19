import React from 'react';

import './style.css';

const LikeCommentsCount = ({ item }) => {
  return (
    <div className="like-count-main">
      <div className="like-count-text">
        <div className="count">{item?.like ? 1 : 0}</div>
        <div className="like-text">Likes</div>
      </div>
      <div className="like-dot"></div>
      <div className="like-count-text">
        <div className="count">{item?.comments?.length}</div>
        <div className="like-text">Comments</div>
      </div>
    </div>
  );
};

export default LikeCommentsCount;
