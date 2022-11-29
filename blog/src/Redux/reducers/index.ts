import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from './posts';
import userReducer from './users';

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
});

export default rootReducer;

