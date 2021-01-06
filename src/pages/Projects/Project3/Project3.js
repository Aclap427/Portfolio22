import React, { Component } from 'react';
import Project4 from '../Project4/Project4';
import Project7 from '../Project7/Project7';


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
            <>
            <div id="pro">
                <p id="click">-Click on image to toggle-</p>
                <img className="Img" style={{ alignSelf: 'center', marginTop: '5%' }} alt="game" src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6 className="gameH6"> Meme World </h6> <br />
                <p className="gameP">-Built using HTML, CSS, Django, Python, PostgresQL & AWS- <br />
                 A group project I had way too much fun working on. You can create
                  and edit your own memes with ease and read other memes users have created. <br/>
                    <a href="https://memeworld-project3.herokuapp.com/" class="oLink" target="_blank" rel="noreferrer">Do you dare to Meme? </a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
            <a href="https://github.com/Aclap427/Meme_World" class="oLink" target="_blank" rel="noreferrer">Link to GitHub</a>
                </p>
               
                </div>
                <Project7 />
                <Project4 />
            </>
        );
    }

}

export default Project3;