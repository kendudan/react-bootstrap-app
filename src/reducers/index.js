import { combineReducers } from 'redux';
import posts from './posts';
import marks from './marks';
import userInfo from './userInfo';

const reducers = combineReducers({
    posts,
    marks,
    userInfo
});

export default reducers;
