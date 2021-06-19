import * as types from './types';
import Api from '../lib/requests/api';
import Storage from '../lib/requests/storage';

function setPostLoading(isPostLoading) {
  return {
    type: types.POST_LOADING,
    isPostLoading,
  };
}

function getAllPost(postData) {
  return {
    type: types.ALL_POSTS,
    postData,
  };
}

function updatePost(postUpdate) {
  return {
    type: types.UPDATE_POST,
    postUpdate,
  };
}

function addComment(addComment) {
  return {
    type: types.ADD_COMMENT,
    addComment,
  };
}

function getAllComnetsPost(allComments) {
  return {
    type: types.ALL_COMMENTS,
    allComments,
  };
}

export function getAllPostFunc() {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.get('post/')
      .then((resp) => {
        dispatch(getAllPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function updatePostFunc(postId, value) {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.patch(`post/${postId}`, value)
      .then((resp) => {
        dispatch(updatePost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function addCommentFunc(postId, content, setData) {
  return (dispatch) => {
    dispatch(setPostLoading(true));
    Api.patch(`post/comment/${postId}`, {
      content: content,
    })
      .then((resp) => {
        setData({
          content: '',
        });
        dispatch(addComment(resp));
        dispatch(setPostLoading(false));
        dispatch(getAllPostFunc());
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function getAllCommentsOfPostFunc(postId) {
  console.log('postId', postId);
  return (dispatch) => {
    dispatch(setPostLoading(true));
    Api.get(`comment/${postId}/comments`)
      .then((resp) => {
        dispatch(getAllComnetsPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function updateComment(postId, commentId, body) {
  console.log('sasasa', commentId);
  return (dispatch) => {
    dispatch(setPostLoading(true));
    Api.patch(`post/comment/edit/${postId}/${commentId}`, { content: body })
      .then((resp) => {
        console.log('all comments salman', resp);
        dispatch(getAllPostFunc());
        // dispatch(getAllComnetsPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function addPostFunc(content, setData, data) {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.post(`post/`, {
      title: 'My infinite Post',
      content: content,
      user: '60cda5ec332d284430a7cec6',
    })
      .then((resp) => {
        console.log('post successfully ', resp);
        setData({
          content: '',
        });
        dispatch(getAllPostFunc());
        // dispatch(getAllPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function deleteComment(postId, commentId, data) {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.patch(`post/comment/${postId}/${commentId}`, {})
      .then((resp) => {
        console.log('delete post successfully ', resp);
        dispatch(getAllPostFunc());

        // dispatch(getAllPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function deletePost(postId) {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.delete(`post/${postId}`, {})
      .then((resp) => {
        console.log('delete post successfully ', resp);
        dispatch(getAllPostFunc());

        // dispatch(getAllPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function likeCommentFunc(postId, commentId, flag) {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.patch(`post/comment/${postId}/${commentId}/${flag}`, {})
      .then((resp) => {
        console.log('Like comment successfully', resp);
        dispatch(getAllPostFunc());

        // dispatch(getAllPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}

export function likePostFunc(postId, flag) {
  return (dispatch) => {
    dispatch(setPostLoading(true));

    Api.patch(`post/${postId}`, { like: flag })
      .then((resp) => {
        console.log('Like posts successfully', resp);
        dispatch(getAllPostFunc());

        // dispatch(getAllPost(resp));

        dispatch(setPostLoading(false));
      })
      .catch((err) => {
        dispatch(setPostLoading(false));
      });
  };
}
