import React, { Component } from 'react';

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
            <div id="pro">
                <p id="click">-Click on image to toggle-</p>
                <img className="Img" style={{ alignSelf: 'center', marginTop: '5%' }} alt ="game" src={images[imageName]} onClick={this.toggleImage} /> <br />
                <h6 className="gameH6"> Homeschool Record Keeper </h6> <br />
                <p className="gameP">-Created using HTML, CSS, MongoDB/Mongoose, Express, React and Node- <br />
                 An easy way to log your students daily lessons and to keep track of their progress. <br/>
                    <a href="https://project4-recordkeeper.herokuapp.com/" class="oLink" target="_blank" rel="noreferrer">Check out the site </a> &nbsp; &nbsp; &nbsp; | &nbsp;
                    &nbsp; &nbsp;
                    <a href="https://github.com/Aclap427/project4" class="oLink" target="_blank" rel="noreferrer">Link to GitHub</a>
                </p>
                
                
            </div>
        );
    }

}

export default Project4;