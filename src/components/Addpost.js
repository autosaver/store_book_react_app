import React from 'react'
import Upload from './Upload';



function Addpost({curr_Id,setcurr_Id}) {
    return (<>
        <button type="button" className="btn btn-outline-light mx-4 " data-bs-toggle="modal" data-bs-target="#exampleModal">
            Upload
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{curr_Id?'Edit':'Upload'} Photo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Upload curr_Id={curr_Id} setcurr_Id={setcurr_Id}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Addpost
