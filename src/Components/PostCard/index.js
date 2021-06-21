import React from 'react';



import AddComment from '../AddComment';
import CardHeader from '../CardHeader/index';
import LikeCommentsCount from '../LikeCommentsCount/index';

import './style.css';

const PostCard = ({
  item,
  handleChange,
  handleUpdatePost,
  setData,
  data,
  handleAddComment,
  setState,
  state,
  handleUpdateComment,
  handleDelteComment,
  handleDeltePost,
  handleLikeComment,
  handleUnLikeComment,
  likePostFunc,
}) => {
  return (
    <div className="post-card-container-main-header">
      <div className="post-card-container">
        <CardHeader handleDeltePost={handleDeltePost} data={data} handleChange={handleChange} handleUpdatePost={handleUpdatePost} item={item} setData={setData} />
        <div>
          <div>{item.content}</div>
        </div>
        <LikeCommentsCount item={item} />
      </div>
      <div style={{ width: '80%' }}>
        <AddComment
          setState={setState}
          state={state}
          handleChange={handleChange}
          handleAddComment={handleAddComment}
          item={item}
          handleUpdateComment={handleUpdateComment}
          handleDelteComment={handleDelteComment}
          data={data}
          handleLikeComment={handleLikeComment}
          handleUnLikeComment={handleUnLikeComment}
          likePostFunc={likePostFunc}
        />
      </div>
    </div>
  );
};

export default PostCard;
