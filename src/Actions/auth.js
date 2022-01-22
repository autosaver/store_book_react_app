import * as api from '../api'

export const login=(data,token)=>async(dispatch)=>{
    
    try {
        await api.login_user({title:data.name,mail:data.email,token});
        dispatch({
            type:"login",
            payload:{...data,token}
        })
        
    } catch (error) {
        console.log("Error Occured auth.js actions")
    }
    
}