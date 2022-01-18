import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

function Posts({curr_Id,setcurr_Id}) {
    const posts=useSelector((state)=>state.posts)
    return (
        <div className='card-group'>
            {
                posts.map((element)=>{return <div  key={element._id}><Post element={element} setcurr_Id={setcurr_Id}/></div>})
            }
        </div>
    )
}

export default Posts
