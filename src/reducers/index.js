import { combineReducers } from 'redux';

import * as authReducer from './auth';
import * as postReducer from './post';

export default combineReducers(Object.assign(authReducer, postReducer));
