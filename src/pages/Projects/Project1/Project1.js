import React, { Component } from 'react';
import './Project1.css';



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
            <div id="pro">
                <p id="click">-Click on image to toggle-</p>
                <img className="Img"style={{  alignSelf: 'center', marginTop: '5%' }} alt="game" src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6 className="gameH6"> 90's Nostalgia Memory Game</h6> <br />
                <p className="gameP">-Built using HTML, CSS & JavaScript- <br />
                Find all 10 matches before the timer runs out! <br />
                    <a href="https://aclap427.github.io/Memory/" class="oLink" target="_blank" rel="noreferrer">Click to Play</a> &nbsp;  | &nbsp;
                <a href="https://github.com/Aclap427/Memory" class="oLink" target="_blank" rel="noreferrer">Link to GitHub</a><br /><br />
                </p>
               
            </div>
        );
    }

}

export default Project1;