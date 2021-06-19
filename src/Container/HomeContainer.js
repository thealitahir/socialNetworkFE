import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllPostFunc,
  updatePostFunc,
  addCommentFunc,
  getAllCommentsOfPostFunc,
  updateComment,
  addPostFunc,
  deleteComment,
  deletePost,
  likeCommentFunc,
  likePostFunc,
} from '../action/post';
import { HomeScreen } from '../Screen';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { postData, allComments, isPostLoading } = useSelector((store) => store.post);

  const [data, setData] = useState({
    content: '',
    comment: '',
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

  const handleAddComment = (postId) => {
    dispatch(addCommentFunc(postId, data?.content, setData));
  };

  const handleGetComment = (postId) => {
    dispatch(getAllCommentsOfPostFunc(postId));
  };

  const handleUpdateComment = (postId, commentId) => {
    dispatch(updateComment(postId, commentId, data?.content));
  };

  const handlePost = () => {
    dispatch(addPostFunc(data?.content, setData, data));
  };

  const handleDelteComment = (postId, commentId) => {
    dispatch(deleteComment(postId, commentId));
  };

  const handleDeltePost = (postId) => {
    console.log('deletePost', postId);
    dispatch(deletePost(postId));
  };

  const handleLikeComment = (postId, commentId) => {
    console.log('post id', postId);
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
        handleChange={handleChange}
        postData={postData}
        handleUpdatePost={handleUpdatePost}
        setData={setData}
        isPostLoading={isPostLoading}
        data={data}
        handleAddComment={handleAddComment}
        handleGetComment={handleGetComment}
        allComments={allComments}
        handleUpdateComment={handleUpdateComment}
        handlePost={handlePost}
        handleDelteComment={handleDelteComment}
        handleDeltePost={handleDeltePost}
        handleLikeComment={handleLikeComment}
        handleUnLikeComment={handleUnLikeComment}
        likePostFunc={handleLikePost}
      />
    </div>
  );
};

export default HomeContainer;
