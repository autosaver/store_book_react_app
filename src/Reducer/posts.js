
const reducer_post=(state = [], { type, payload }) => {
    switch (type) {
    case "Fetch":
        return payload;
    case "Post":
        return state.concat(payload);
    case "Delete":
        return state.filter((element)=>{return element._id!==payload._id});
    case "Update":
        return state.map((post)=>post._id===payload._id?payload:post);
    case "Like":
        return state.map((post)=>post._id===payload._id?{...post,like:post.like+1}:post);

    default:
        return state;
    }
}

export default reducer_post;