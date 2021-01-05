import React, { Component } from 'react';
import './Project3.css';
import { Link } from 'react-router-dom';


const images = {
    front: "https://i.imgur.com/ohF8wlP.png?1",
    back: "https://i.imgur.com/ztxX5eI.png"
}

class Project3 extends Component {
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
            <div id="pro3">
                <p id="click">-Click on image to toggle-</p>
                <img className="Img" style={{ alignSelf: 'center', marginTop: '5%' }} alt="game" src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6 className="gameh6"> Meme World </h6> <br />
                <p className="gameP">-Built using HTML, CSS, Django, Python, PostgresQL & AWS- <br />
                 A group project I had way too much fun working on. You can create
                  and edit your own memes with ease and read other memes users have created. <br/>
                    <a href="https://memeworld-project3.herokuapp.com/" class="olink" target="_blank" rel="noreferrer">Do you dare to Meme? </a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/Aclap427/Meme_World" class="olink" target="_blank" rel="noreferrer">Link to GitHub</a>
                </p>
                <button className="toggleBack"><Link to='/Project2' style={{ color: 'white' }}> Prev </Link></button>
                <button id="toggle"><Link to='/Project4' style={{ color: 'white' }}> Next </Link></button>
            </div>
        );
    }

}

export default Project3;