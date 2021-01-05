import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';


function Header() {
    return (
        <>
            <div id="header">
                 <h2> A M A N D A &nbsp; &nbsp; C L A P R O T H </h2>
                 <h5>Full-stack Software Engineer &nbsp; | &nbsp; Los Angeles, CA</h5>
                <NavBar />
            </div>
            
        </>
    );
}
    

export default Header;