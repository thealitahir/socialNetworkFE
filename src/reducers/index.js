import { combineReducers } from 'redux';

import * as postReducer from './post';

export default combineReducers(Object.assign(postReducer));
