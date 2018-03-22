import React, { Component } from 'react';
import '../App.css';
import images from "../images.json"



const GameCard = props => (
    <div>
        <img src={props.link} clicked={props.clicked} onClick={() => {props.onClick(props.link)}} />
    </div>
);

export default GameCard;
