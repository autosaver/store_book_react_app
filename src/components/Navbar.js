import React, { useEffect, useState } from 'react'
import Addpost from './Addpost'

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { login } from '../Actions/auth';
import Userlogo from './Userlogo';


function Navbar({ curr_Id, setcurr_Id }) {
    const dispatch=useDispatch()

    const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [isLogin, setisLogin] = useState(user?.token?true:false);

    const ClientID="834327652006-d585af119nkjfr0tmciu3l92ih7l1jfe.apps.googleusercontent.com";

    const LoginSuccess = async (response) => {
        const result=response?.profileObj;
        const token=response?.tokenId;
        
        try{
            dispatch(login(result,token));
            setisLogin(true);
            
        }
        catch(error){
            console.log(error.message);
        }
    }    

    const LoginFail = ()=>{
        alert("Login has Failed! Please try again later...")
    }

    const logout=()=>{
        localStorage.clear();
        setisLogin(false)
        alert("Logged Out");
    }

    useEffect(() => {
        setuser(JSON.parse(localStorage.getItem('profile')));
    }, [isLogin]);
    

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
                <div className="d-flex text-light "><strong>Photo-Booth</strong></div>
                {isLogin && <Addpost curr_Id={curr_Id} setcurr_Id={setcurr_Id} />}
                {!isLogin && <GoogleLogin 
                    clientId={ClientID}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="btn btn-outline-light mx-4" disabled={renderProps.disabled}>G-Login</button>
                      )}
                    buttonText="Login"
                    onSuccess={LoginSuccess}
                    onFailure={LoginFail}
                    cookiePolicy={'single_host_origin'}
                />}
                {user && <Userlogo user={user}/>}
                {isLogin && <GoogleLogout
                    clientId={ClientID}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="btn btn-outline-light" disabled={renderProps.disabled}>G-Logout</button>
                      )}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                />}
                
            </div>
        </nav>
    )
}

export default Navbar
