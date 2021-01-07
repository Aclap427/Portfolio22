import React from 'react';
import './AboutCard.css';
import TechCard from '../TechCard/TechCard';



function AboutCard() {
    return (
        <>
        <div id="about">
            <p><h3 id="abouth3">A B O U T &nbsp; &nbsp; M E </h3> <br /> 
            <div id="text"> I am a full-stack software engineer with an eye for style and detail. Before I switched careers and decided to pursue something I am passionate about,
                I was a retail manager for many years at a successful local small-business. The experience I gained as a retail manager
                equipped me with the ability to juggle different tasks and roles on a team. As a software developer, I am always curious and eager to learn
                and constantly trying to sharpen my skills. When I am not coding, you will find me playing with my kids, reading my latest book, playing a video game, or working on my newest painting.
                I am happiest when I am being challenged and able to show my creative side. <br /> <br />
            </div>
            <div id="aLinks">
                <a href="https://docs.google.com/document/d/1oxd7uUgbbP80VBOaDtwpgu8sJspRYwPltw5U03YINCY/edit?usp=sharing" className="oLink" target="_blank" rel="noreferrer">My Resume</a> &nbsp; | &nbsp;
                <a href="https://www.linkedin.com/in/amanda-claproth-8b90501b1/" className="oLink" target="_blank" rel="noreferrer">My LinkedIn</a> &nbsp; | &nbsp; 
                <a href="https://github.com/Aclap427" className="oLink" target="_blank" rel="noreferrer">My Github</a>
            </div>
            </p>
            </div>
           
            <table id="currentTable">
                <thead>
                    <tr>
                        <th>Currently Reading</th>
                        <th>Last thing I watched <br />(that was any good)</th>
                        <th>Best Game I played<br /> in the past year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://i.imgur.com/YSTjDeY.jpg" width="100vw" alt="Dune Book Cover"></img></td>
                        <td><img src="https://i.imgur.com/oKbFPw1.jpg" width="100vw" alt="Total Recall Movie"></img></td>
                        <td><img src="https://i.imgur.com/XryjH7K.jpg" width="100vw" alt="Zelda Game"></img></td>
                    </tr>
                </tbody>
            </table>

            <div id="techCard"><TechCard /></div> 
        </>
    )
}

export default AboutCard;