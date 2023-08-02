import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postsReducer from "./Slices/PostSlices";
import postDetailsReducer from "./Slices/PostDetails"
import commentReducer from "./Slices/CommentSlices"
const reducer = combineReducers({
    posts:postsReducer,
    singlepost:postDetailsReducer,
    comment:commentReducer
})

const store = configureStore({
    reducer,
    middleware:[thunk]
})

export default store;