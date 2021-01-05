import React, { Component } from 'react';
import './Project2.css';
import { Link } from 'react-router-dom';



const images = {
    front: "https://i.imgur.com/huBOOLs.png?1",
    back: "https://i.imgur.com/DxqwAXe.png"
}

class Project2 extends Component {
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
            <div id="pro2">
                <p id="click">-Click on image to toggle-</p>
                <img className="Img" style={{ alignSelf: 'center', marginTop: '5%' }} alt="game" src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6 className="gameh6"> Should My Kid Play That ?!?</h6> <br />
                <p className="gameP">-Built using HTML, CSS, MongoDB/Mongoose, Express, Node- <br />
                An easy way for parents to find info on games their children play 
                and read/leave reviews for other parents <br />
                    <a href="https://vid-game-rating-app.herokuapp.com/" class="olink" target="_blank" rel="noreferrer">Check out the site</a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
                    <a href="https://github.com/Aclap427/Parent-Video-Game-Rating-App" class="olink" target="_blank" rel="noreferrer">Link to Github</a>
                </p>
                <button className="toggleBack"><Link to='/Projects' style={{ color: 'white' }}> Prev </Link></button>
                <button id="toggle"><Link to='/Project3' style={{ color: 'white' }}> Next </Link></button>
            </div>
        );
    }

}

export default Project2;