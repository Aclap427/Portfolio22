import React from 'react';
import './Apps.css';
import { Link } from 'react-router-dom';


function Apps() {
    return (
        <div id="appsContainer">
            <div class="title">
               
            <Link to='/Project3'><h1 id="appsH1">APPS<br/>&<br/>SITES</h1></Link>
            </div>
        </div>
    )
}

export default Apps;