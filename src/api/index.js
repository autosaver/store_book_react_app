import axios from 'axios';

const url="https://photo-booth-backend.herokuapp.com/posts";

export const fetchpost = ()=> axios.get(url);
export const createpost = (post)=> axios.post(url,post);
export const deletepost = (_id)=> axios.delete(`${url}/${_id}`);
export const updatePost = (_id,updatedpost)=> axios.patch(`${url}/${_id}`,updatedpost);
export const likepost = (_id)=> axios.patch(`${url}/${_id}/like`);