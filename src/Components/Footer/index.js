import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="App" >
           <span className="card-footer text-muted footer" style={{fontWeight: "bold"}}>Copyright <FontAwesomeIcon icon={faCopyright} /> Your Website 2021</span> 
        </div>
    );
}

export default Footer;