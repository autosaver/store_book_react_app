import axios from 'axios';

const url="https://photo-booth-backend.herokuapp.com/posts";
// const url="http://localhost:5000/posts";

export const fetchpost = ()=> axios.get(url);
export const createpost = (post)=> axios.post(url,post);
export const deletepost = (_id)=> axios.delete(`${url}/${_id}`);
export const updatePost = (_id,updatedpost)=> axios.patch(`${url}/${_id}`,updatedpost);
export const likepost = (_id)=> axios.patch(`${url}/${_id}/like`);


const auth_url="https://photo-booth-backend.herokuapp.com/auth";
// const auth_url="http://localhost:5000/auth";

export const login_user = (data)=> axios.post(auth_url,data);