import React, { Component } from 'react';
import '../App.css';
import images from "../images.json";
import GameCard from './gameCard.js';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: images,
      score: 0
    }
  }
  gameLoss() {
    
  }
  picClick = (url) => {
    const clicked = this.state.pics.find(pic => pic.url === url)

    if (clicked.wasClicked) {
        return
    }
    else {
        clicked.wasClicked = true;
    }
    
    const shuffled = this.shuffle(this.state.pics);
    this.setState({pics: shuffled});
  }

  shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      const posit = Math.floor(Math.random() * i);
      [array[i], array[posit]] = [array[posit], array[i]]
    }
    return array
  }
  render() {
    
    return (
        <div>
        {this.state.pics.map(image => (
            <GameCard onClick={this.picClick} link={image.url} clicked={image.wasClicked}/>    
        ))}
        </div>
    )
    
  }
}

export default GameContainer;
