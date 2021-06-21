import createReducer from '../store/createReducer';
import * as types from '../action/types';

const INITIAL_STATE = {};

export const post = createReducer(INITIAL_STATE, {
  [types.ALL_POSTS](state, action) {
    return {
      ...state,
      postData: action.postData,
    };
  },

  [types.UPDATE_POST](state, action) {
    return {
      ...state,
      updatePost: action.updatePost,
    };
  },

  [types.ADD_COMMENT](state, action) {
    return {
      ...state,
      commentData: action.commentData,
    };
  },
});
