import React from 'react';
import './TechCard.css';

function TechCard() {
    return (
        <div id="tech">
            <h3> I have experience with: </h3>
            <hr />
              <ul id="techList">
                <li className="list">HTML</li>
                <li className="list">CSS</li>
                <li className="list">JavaScript</li>
                <li className="mern">MongoDB/Mongoose</li>
                <li className="mern">Express</li>
                <li className="mern">React</li>
                <li className="mern">Node</li>
                <li className="list">PostGresQL</li>
                <li className="list">Python</li>
                <li className="list">Django</li>
                <li className="list">jQuery</li>
                <li className="list">OAuth</li>
            </ul>
        </div>
    )
}

export default TechCard;