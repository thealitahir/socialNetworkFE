import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getAllPostFunc, updatePostFunc, addCommentFunc, updateComment, addPostFunc, deleteComment, deletePost, likeCommentFunc, likePostFunc } from '../action/post';
import { HomeScreen } from '../Screen';

const HomeContainer = () => {
  
  const { postData } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    content: '',
    comment: '',
    postText: ''
  });

  useEffect(() => {
    dispatch(getAllPostFunc());
  }, []);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleUpdatePost = (postId) => {
    dispatch(updatePostFunc(postId, { content: data?.content }));
  };

  const handleAddComment = (postId, comment, setComment) => {
    dispatch(addCommentFunc(postId, comment, setComment));
  };

  const handleUpdateComment = (postId, commentId) => {
    dispatch(updateComment(postId, commentId, data?.content));
  };

  const handlePost = () => {
    dispatch(addPostFunc(data?.postText, setData, data));
  };

  const handleDelteComment = (postId, commentId) => {
    dispatch(deleteComment(postId, commentId));
  };

  const handleDeltePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleLikeComment = (postId, commentId) => {
    dispatch(likeCommentFunc(postId, commentId, true));
  };

  const handleUnLikeComment = (postId, commentId) => {
    dispatch(likeCommentFunc(postId, commentId, false));
  };

  const handleLikePost = (postId, flag) => {
    dispatch(likePostFunc(postId, flag));
  };
  return (
    <div>
      <HomeScreen
        data={data}
        handleChange={handleChange}
        handleUpdatePost={handleUpdatePost}
        handleAddComment={handleAddComment}
        handleUpdateComment={handleUpdateComment}
        handlePost={handlePost}
        handleDelteComment={handleDelteComment}
        handleDeltePost={handleDeltePost}
        handleLikeComment={handleLikeComment}
        handleUnLikeComment={handleUnLikeComment}
        postData={postData}
        setData={setData}
        likePostFunc={handleLikePost}
      />
    </div>
  );
};

export default HomeContainer;
