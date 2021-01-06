import React from 'react';
import Games from './GamesComp/Games';
import Apps from './AppsComp/Apps';
import './ProjectsPage.css';


function Projects() {
    return (
        <div id="Projects">
            <Games />
            <Apps/>
          
        </div>
    )
}

export default Projects;