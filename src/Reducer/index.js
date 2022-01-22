import { combineReducers } from "redux";
import posts from "./posts";
import auth_post from "./auth"

const reducers=combineReducers({
    posts,auth_post
})
export default reducers;