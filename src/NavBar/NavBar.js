import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    return (
        <div id="nav">
            <ul>
                <li><Link to='/AboutMe'>About Me</Link> | </li>
                <li><Link to='/Projects'>&nbsp; Projects</Link> | </li>
                <li><Link to='/Contact'>&nbsp; Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;