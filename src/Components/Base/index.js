import React from 'react';
import logo from './logo.png'
import Footer from '../Footer';
import { useNavigate } from 'react-router';


function Base({title, description, children}) {

    const navigate = useNavigate(); // to Navigate to diff. pages through button

    return (
        <body >
        <div className="main-container">

                <nav className="navbar navbar-light">
                    <a className="navbar-brand" href="#">
                    <h2 style={{color: "whitesmoke"}}><span>&nbsp;<img src={logo} style={{width: "40px", height: "40px"}} alt=""></img> {title} </span></h2>
                    </a>
               
                    <ul className="nav-btn-group">
                            <li style={{backgroundColor: "rgb(0, 82, 94)"}}>
                                <span className="icon"><i className="ph ph-house"></i></span>
                                <button className="text btn btn-outline-secondary" onClick={()=>navigate("/")}>Dashboard</button>
                            </li>
                            <li style={{backgroundColor: "rgb(0, 82, 94)"}}>
                                <span className="icon"><i className="ph ph-users"></i></span>
                                <button className="text btn btn-outline-secondary" onClick={()=>navigate("/students")}>Students</button>
                            </li>
                            <li style={{backgroundColor: "rgb(0, 82, 94)"}}>
                                <span className="icon"><i className="ph ph-user-plus"></i></span>
                                <button className="text btn btn-outline-secondary" onClick={()=>navigate("/create-student")}>Add Student</button>
                            </li>
                    </ul>

                    <h3 className="instruction"><button type="button" class="btn btn-light" onClick={()=>navigate("/instructions")}>Instructions</button></h3>
                </nav>
                <hr></hr>
                <p className="App">{description}</p>

                <div>
                    {children}
                </div>
         </div>
           
            
        <Footer />
        </body>
    );
}

export default Base;