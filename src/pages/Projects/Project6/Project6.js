import React, { Component } from 'react';

const images = {
    front: "https://i.imgur.com/uiqKbqV.png?1",
    back: "https://i.imgur.com/6gjQFEk.png?1"
}

class Project6 extends Component {
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
                <h6 className="gameH6"> Tic Tac Toe </h6> <br />
                <p className="gameP">-Built using HTML, CSS & Javascript- <br />
                 A game honoring my two favorite meals. Instead of X and O you have Taco and Sushi.<br />
                    <a href="https://aclap427.github.io/TicTacToe-Game/" class="oLink" target="_blank" rel="noreferrer">Click to play </a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/Aclap427/TicTacToe-Game" class="oLink" target="_blank" rel="noreferrer">Link to GitHub</a>
                </p>

            </div>
        );
    }

}

export default Project6;