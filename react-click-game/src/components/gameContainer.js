import React, { Component } from 'react';
import '../App.css';
import images from "../images.json";
import GameCard from './gameCard.js';
var characters = images;

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: characters,
      score: 0,
      highScore: 0,
      message: "Click an Image to Begin!"
    }
  }
  gameReset() {
      this.setState({score: 0});
      this.state.pics.map(image => {
          image.wasClicked = false;
      })
  }
  gameLoss() {
    this.gameReset();
    this.setState({message: "You guessed Incorrectly"});
    const shuffled = this.shuffle(this.state.pics);
    this.setState({pics: shuffled});
  }
  gameWin() {
    this.setState({message: "You guessed Right"})
      this.state.score += 1
    if (this.state.score > this.state.highScore) {
        this.setState({highScore: this.state.score})
    }
    
  }
  picClick = (url) => {
    const clicked = this.state.pics.find(pic => pic.url === url)

    if (clicked.wasClicked) {
        this.gameLoss()
    }
    else {
        clicked.wasClicked = true;
        this.gameWin();
        console.log(this.state.score, this.state.highScore);
        const shuffled = this.shuffle(this.state.pics);
        this.setState({pics: shuffled});
    }
    
    
  }

  shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      const posit = Math.floor(Math.random() * i);
      [array[i], array[posit]] = [array[posit], array[i]]
    }
    return array
  }
  render() {
    console.log(this.state.pics)
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    
                    <div className="navbar-header brand">
                        <a className="navbar-brand" id="title" href="#">React Click Game</a>
                    </div>

                    <ul className="nav navbar-nav navbar text-center center" >
                        <li className="text text-center" id="message" >{this.state.message}</li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="scores text">Score: {this.state.score}</li>
                        <li className="scores text">High Score: {this.state.highScore}</li>
                    </ul>
                    
                </div>
            </nav>
            <div className="col-lg-12 col-centered" >
                {this.state.pics.map(image => (
                    <GameCard onClick={this.picClick} link={image.url} clicked={image.wasClicked}/>    
                ))}
            </div>
        </div>
    )
    
  }
}

export default GameContainer;
