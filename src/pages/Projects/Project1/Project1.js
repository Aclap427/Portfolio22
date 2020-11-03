import React, { Component } from 'react';
import './Project1.css';
import { Link } from 'react-router-dom';


const images = {
    front: "https://i.imgur.com/ampRJJs.png",
    back: "https://i.imgur.com/ERniL5V.png?1"
}

class Project1 extends Component {
    state = {
        open: true
    }

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    
    }

    getImageName = () => this.state.open ? 'front' : 'back'

    render() {
        const imageName = this.getImageName();
        return (
            <div id="pro1">
                <p id="click">-Click on image to toggle-</p>
                <img style={{ maxWidth: '70%', maxHeight: '270px', alignSelf: 'center', marginTop: '5%' }} src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6> 90's Nostalgia Memory Game</h6> <br />
                <p>-Built using HTML, CSS & JavaScript- <br />
                Find all 10 matches before the timer runs out! <br />
                    <a href="https://aclap427.github.io/Memory/" class="olink" target="_blank">Play and Remember</a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
                <a href="https://github.com/Aclap427/Memory" class="olink" target="_blank">Link to GitHub</a><br /><br />
                </p>
                <button id="toggle"><Link to='/Project2'style={{color:'white'}}> Next </Link></button>
            </div>
        );
    }

}

export default Project1;