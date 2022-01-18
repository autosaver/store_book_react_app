import React from 'react'
import Addpost from './Addpost'

function Navbar({curr_Id,setcurr_Id}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
                <div className="d-flex text-light "><strong>Photo-Booth</strong></div> 
                 <Addpost curr_Id={curr_Id} setcurr_Id={setcurr_Id}/>
            </div>
        </nav>
    )
}

export default Navbar
