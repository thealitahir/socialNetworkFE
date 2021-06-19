import createReducer from '../store/createReducer';
import * as types from '../action/types';

const INITIAL_STATE = {
  isPostLoading: false,
};

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

  [types.ALL_COMMENTS](state, action) {
    return {
      ...state,
      allComments: action.allComments,
    };
  },

  [types.POST_LOADING](state, action) {
    return {
      ...state,
      isPostLoading: action.isPostLoading,
    };
  },
});
