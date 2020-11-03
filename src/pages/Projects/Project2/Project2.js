import React, { Component } from 'react';
import './Project2.css';
import { Link } from 'react-router-dom';
import Project3 from '../Project3/Project3';


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
                <img style={{ width: '60%', height: '270px', alignSelf: 'center', marginTop: '5%' }} src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6> Should My Kid Play That ?!?</h6> <br />
                <p>-Built using HTML, CSS, MongoDB/Mongoose, Express, Node- <br />
                An easy way for parents to find info on games their children play <br />
                and read/leave reviews for other parents <br />
                    <a href="https://vid-game-rating-app.herokuapp.com/" class="olink" target="_blank">Check out the site</a> &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp;
                    <a href="https://github.com/Aclap427/Parent-Video-Game-Rating-App" class="olink" target="_blank">Link to Github</a>
                </p>
                <button id="toggleBack"><Link to='/Projects' style={{ color: 'white' }}> Prev </Link></button>
                <button id="toggle"><Link to='/Project3' style={{ color: 'white' }}> Next </Link></button>
            </div>
        );
    }

}

export default Project2;