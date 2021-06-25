import * as types from './types';
import Api from '../lib/requests/api';

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

export function getAllPostFunc() {
  return (dispatch) => {
    Api.get('post/')
      .then((resp) => {
        let data = Object.values(resp.data); 

        for(let item=0; item< data.length; item++){
          data[item] = JSON.parse(data[item])
        }
        data.sort(function(first_number, second_number) {
          var first_number_date = new Date(first_number.createdAt);
          var second_number_date = new Date(second_number.createdAt);
          return first_number_date-second_number_date;
        });
        
        dispatch(getAllPost(data.reverse()));
      })
      .catch(() => {});
  };
}

export function updatePostFunc(postId, value) {
  return (dispatch) => {
    Api.patch(`post/${postId}`, value)
      .then((resp) => {
        dispatch(updatePost(resp));
        dispatch(getAllPostFunc(resp));
      })
      .catch(() => {});
  };
}

export function addCommentFunc(postId, content, setData) {
  return (dispatch) => {
    Api.patch(`post/comment/${postId}`, {
      content: content,
    })
      .then((resp) => {
        setData();
        dispatch(addComment(resp));
        dispatch(getAllPostFunc());
      })
      .catch(() => {});
  };
}

export function updateComment(postId, commentId, body) {
  return (dispatch) => {
    Api.patch(`post/comment/edit/${postId}/${commentId}`, { content: body })
      .then(() => {
        dispatch(getAllPostFunc());
      })
      .catch((err) => {});
  };
}

export function addPostFunc(content, setData) {
  return (dispatch) => {
    Api.post(`post/`, {
      title: 'My infinite Post',
      content: content,
      user: '60cda5ec332d284430a7cec6',
    })
      .then((resp) => {
        setData({
          postText: '',
        });
        dispatch(getAllPostFunc());
      })
      .catch((err) => {});
  };
}

export function deleteComment(postId, commentId) {
  return (dispatch) => {
    Api.patch(`post/comment/${postId}/${commentId}`, {})
      .then(() => {
        dispatch(getAllPostFunc());
      })
      .catch((err) => {});
  };
}

export function deletePost(postId) {
  return (dispatch) => {
    Api.delete(`post/${postId}`, {})
      .then(() => {
        dispatch(getAllPostFunc());
      })
      .catch((err) => {});
  };
}

export function likeCommentFunc(postId, commentId, flag) {
  return (dispatch) => {
    Api.patch(`post/comment/${postId}/${commentId}/${flag}`, {})
      .then(() => {
        dispatch(getAllPostFunc());
      })
      .catch(() => {});
  };
}

export function likePostFunc(postId, flag) {
  return (dispatch) => {
    Api.patch(`post/${postId}`, { like: flag })
      .then(() => {
        dispatch(getAllPostFunc());
      })
      .catch(() => {});
  };
}
