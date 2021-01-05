import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    return (
        <div id="nav">
        <div class="dropdown">
                <img src="https://i.imgur.com/052YlJQ.jpg" alt ="nav button" className="navBtn"></img>
                <div className="dropdown-content">
                    <Link to='/'className="link">Home</Link><br/>
                    <Link to='/AboutMe' className="link">About Me</Link><br/>
                    <Link to='/Projects' className="link">My Projects</Link><br/>
                    <Link to='/Contact'className="link">Contact Me</Link><br/>
            
                </div>
            </div>
        </div>
    )
}

export default NavBar;