import React from 'react';
import './AboutMe.css';
import AboutCard from '../../AboutCard/AboutCard';
import TechCard from '../../TechCard/TechCard';




function AboutMe() {
    return (
        <>
        <div id="aboutContainer">
            <AboutCard />
            <TechCard /> 
        </div>
        
        </>
    )
}

export default AboutMe;