import React, { Component } from 'react';
import Project1 from '../Project1/Project1';
import Project5 from '../Project5/Project5';
import Project6 from '../Project6/Project6';


class Project2 extends Component {

    render() {
        
        return (
            <>
                <Project1 />
                <Project6 />
                <Project5 />
           
            </>
        );
    }

}

export default Project2;