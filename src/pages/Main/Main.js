import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';


function Main() {

    return (
        <div class="main">
            <div class="slide-up">
                <div class="inner">
                <img id="slidingPhoto" src="https://i.imgur.com/Mdw7y1C.jpg?2" alt="image sliding up"></img><br/>
                </div>
            </div>
            <p class="line-1 anim-typewriter">Hello, I am Amanda, welcome to my portfolio.</p>
            
            <div id="navCircles">
                
                <div className="circles">
                    <Link to="/AboutMe">
                        <h5 className="overlayLink"><br/>About<br/>Me</h5>
                        <img className="navCirclePhotos" src="https://i.imgur.com/LUPuGPu.jpg"></img>
                    </Link>
                </div>

                <div className="circles">
                    <Link to="/Projects">
                        <h5 className="overlayLink"><br/>My<br/>Projects</h5>
                        <img className="navCirclePhotos" src="https://i.imgur.com/a5I4jsR.jpg?1"></img>
                    </Link>
                </div>
                
                <div className="circles">
                    <Link to="/Contact">
                        <h5 className="overlayLink"><br/>Contact<br/>Me</h5>
                        <img className="navCirclePhotos" src="https://i.imgur.com/SbZBPzT.jpg?1"></img>
                    </Link>
                </div>
            </div>

           
         

        </div>
    );
}

export default Main;