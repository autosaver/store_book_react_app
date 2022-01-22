import React from 'react';

const Userlogo = ({user}) => {
    return <div style={{ color: "white" }}>
                {user?.name}  <img className=' rounded-circle' src={user?.imageUrl} alt='...' width="15%" ></img>
            </div>
};

export default Userlogo;
