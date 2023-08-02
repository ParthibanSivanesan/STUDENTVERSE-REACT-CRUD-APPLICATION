import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoPage() {

    const navigate = useNavigate();

    return (
        <div className="App">   
        <div>
            <h1>Wrong Url 404 Error</h1>
            <h5>We can't find your location</h5>
        </div>
        <h3>Please click below</h3>
        <button className="btn btn-light" onClick={()=>navigate("/")}> Home</button>
        
        </div>
    );
}

export default NoPage;