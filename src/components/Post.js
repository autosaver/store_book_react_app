import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../Actions';


function Post(props) {
    const dispatch = useDispatch();
    const { element } = props;
    const tags=element.tags?element.tags.split(','):[];

    const handleDelete=()=>{
        try{
            dispatch(deletePost(element._id));
        }
        catch{
            console.log("Internal Error")
        }
    }
    const handleEdit=()=>{
        props.setcurr_Id(element._id);
        
    }

    const handleLike=()=>{
        dispatch(likePost(element._id));
    }

    return (
        <div className="card mx-2 my-2" style={{ width: "18rem" }}>
            <img src={element.selectedFile} className="card-img-top" alt="..."  height="230" />
            <div className="card-body">
                {tags.map((tag,index) => {
                    return <div key={index} className="badge text-wrap" style={{color:"black"}}>{`#${tag}`} </div>})}

                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.message}</p>
                <p className="text-muted fst-italic small">{element.creater}</p>
                <button className="btn btn-link far fa-heart" style={{color:"red",textDecoration:"none"}} onClick={handleLike}>{element.like}</button>
                <a className="btn btn-link fas fa-edit mx-2" href='/' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:"black"}} onClick={handleEdit}>.</a>
                <button className="btn btn-link far fa-trash-alt mx-2" style={{color:"black"}} onClick={handleDelete}></button>
                
            </div>
        </div>
    )
}

export default Post
