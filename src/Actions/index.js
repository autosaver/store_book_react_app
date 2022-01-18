
import * as api from '../api'

export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}= await api.fetchpost();
        dispatch({
            type:"Fetch",
            payload:data
        })
        
    } catch (error) {
        console.log("Error Occured index.js actions")
    }
    
}
export const sendPost=(post)=>async(dispatch)=>{
    try {

        const newPost= await api.createpost(post);
        
        dispatch({
            type:"Post",
            payload:newPost.data
        })
        
    } catch (error) {
        console.log("Error Occured index.js actions")
    }
}


export const deletePost=(_id)=>async(dispatch)=>{
    try {
        const data= await api.deletepost(_id);
        dispatch({
            type:"Delete",
            payload:data.data
        })
        
    } catch (error) {
        console.log("Error Occured index.js actions")
    }
    
}


export const updatePost=(_id,data)=>async(dispatch)=>{
    try {
        const newdata=await api.updatePost(_id,data);
        dispatch({
            type:"Update",
            payload:newdata.data
        })
        
    } catch (error) {
        console.log("Error Occured index.js actions")
    }
    
}

export const likePost=(_id)=>async(dispatch)=>{
    try {
        await api.likepost(_id);
        
        dispatch({
            type:"Like",
            payload:{_id}
        })
        
    } catch (error) {
        console.log("Error Occured index.js actions")
    }
    
}
