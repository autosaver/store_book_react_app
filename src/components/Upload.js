import React, { useEffect, useState } from 'react';
import { sendPost, updatePost } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';


function Upload(props) {
    const dispatch = useDispatch();
    const [Data, setData] = useState({
        title: "",
        message: "",
        creater: "",
        selectedFile: "",
        tags: ""
    });
    const post = useSelector((state) => props.curr_Id?state.posts.find((p)=>p._id===props.curr_Id):null)
    useEffect(()=>{
        if(post) setData(post);
        },[post]);

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(props.curr_Id){
            dispatch(updatePost(props.curr_Id,Data));
        }
        else{
            dispatch(sendPost(Data));
        }
        props.setcurr_Id(null)
        setData({
            title: "",
            message: "",
            creater: "",
            selectedFile: "",
            tags: ""
        });
    }

    const handleOnchange = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="tags" type="text" className="form-control my-2" placeholder="Create Tags seperated by comma" name="tags" value={Data.tags} onChange={handleOnchange} />
            <input id="creater" type="text" className="form-control my-2" placeholder="Creater Name" name="creater" value={Data.creater} onChange={handleOnchange} />
            <input id="title" type="text" className="form-control my-2" placeholder="Enter Title" name="title" value={Data.title} onChange={handleOnchange} />
            <input id="message" type="text" className="form-control my-2" placeholder="Enter Message" name="message" value={Data.message} onChange={handleOnchange} />
            <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => {
            setData({
                ...Data,
                selectedFile: base64,
                })}}/>
            <div className="modal-footer">
                <button type="Submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Upload
