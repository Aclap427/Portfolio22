import React, { Component } from 'react';
import './Project4.css';
import { Link } from 'react-router-dom';


const images = {
    front: "https://i.imgur.com/rSeWcfx.png?1",
    back: "https://i.imgur.com/1YSI9pQ.png?1"
}

class Project4 extends Component {
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
            <div id="pro4">
                <p id="click">-Click on image to toggle-</p>
                <img style={{ width: '60%', height: '270px', alignSelf: 'center', marginTop: '5%' }} src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6> Homeschool Record Keeper </h6> <br />
                <p>-Created using HTML, CSS, MongoDB/Mongoose, Express, React and Node- <br />
                 An easy way to log your students daily lessons and to keep track of their progress. <br/>
                    <a href="https://project4-recordkeeper.herokuapp.com/" class="olink" target="_blank">Check out the site </a> &nbsp; &nbsp; &nbsp; | &nbsp;
                    &nbsp; &nbsp;
                    <a href="https://github.com/Aclap427/project4" class="olink" target="_blank">Link to GitHub</a>
                </p>
                <button id="toggleBack"><Link to='/Project3' style={{ color: 'white' }}> Prev </Link></button>
                
            </div>
        );
    }

}

export default Project4;