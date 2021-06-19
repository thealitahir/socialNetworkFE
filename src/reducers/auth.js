import createReducer from '../store/createReducer';
import * as types from '../action/types';

const INITIAL_STATE = {
  isLoading: false,
};
export const auth = createReducer(INITIAL_STATE, {
  [types.IS_LOADING](state, action) {
    return {
      ...state,
      userData: action.userData,
    };
  },
});
