import React, { Component } from 'react';




const images = {
    front: "https://i.imgur.com/DChx1k2.png?1",
    back: "https://i.imgur.com/fAI2kFp.png?1"
}

class Project5 extends Component {
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
                <img className="Img" style={{ alignSelf: 'center', marginTop: '5%' }} alt="game" src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6 className="gameH6"> Guess the Number Game </h6> <br />
                <p className="gameP">-Built using HTML, CSS & Javascript- <br />
                 The computer randomly picks a number 1-100 and you type in your guess. The game will let you know if your guess is too
                 high or too low as well as keep a total of the numbers you've guessed wrong on display. <br />
                    <a href="https://aclap427.github.io/Guess-the-Number-Game/" class="oLink" target="_blank" rel="noreferrer">Click to play </a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/Aclap427/Guess-the-Number-Game" class="oLink" target="_blank" rel="noreferrer">Link to GitHub</a>
                </p>
                
            </div>
        );
    }

}

export default Project5;