import React, { useEffect, useState } from 'react';
import AddComment from '../AddComment';
import CardHeader from '../CardHeader/index';
import LikeCommentsCount from '../LikeCommentsCount/index';
import { useSelector } from 'react-redux';
import './style.css';

const PostCard = ({
  item,
  handleChange,
  handleUpdatePost,
  setData,
  isPostLoading,
  data,
  handleAddComment,
  handleGetComment,
  setState,
  state,
  allComments,
  handleUpdateComment,
  handleDelteComment,
  handleDeltePost,
  handleLikeComment,
  handleUnLikeComment,
  likePostFunc,
}) => {
  // const { allComments } = useSelector((store) => store.post);

  // useEffect(() => {
  //   handleGetComment(item?._id);
  //   console.log('id', item?._id);
  // }, []);
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="post-card-container">
        <CardHeader
          handleDeltePost={handleDeltePost}
          data={data}
          isPostLoading={isPostLoading}
          handleChange={handleChange}
          handleUpdatePost={handleUpdatePost}
          item={item}
          setData={setData}
        />
        <div>
          <div>{item.content}</div>
        </div>
        <LikeCommentsCount item={item} />
      </div>
      <div style={{ width: '80%' }}>
        <AddComment
          setState={setState}
          state={state}
          allComments={allComments}
          handleChange={handleChange}
          handleAddComment={handleAddComment}
          handleGetComment={handleGetComment}
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
