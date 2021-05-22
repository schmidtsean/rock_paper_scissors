import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import {Wrap} from '../styles/SharedStyles';
import Rock from '../images/Rock.png';
import Scissors from '../images/Scissors.png';
import Paper from '../images/Paper.png';

const Game = ({ score, myChoice, setScore }) => {
  
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  
  const Rock = require('../images/Rock.png'); 
  const Paper = require('../images/Paper.png'); 
  const Scissors = require('../images/Scissors.png'); 

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === <img src= {Rock} data-id='rock' /> && house === <img src={Scissors} data-id='scissors' />) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === <img src= {Rock} data-id='rock' /> && house === <img src={Paper} data-id='paper' />) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === <img src={Scissors} data-id='scissors' /> && house === <img src={Paper} data-id='paper' />) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === <img src={Scissors} data-id='scissors' /> && house === <img src= {Rock} data-id='rock' />) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === <img src={Paper} data-id='paper' /> && house === <img src= {Rock} data-id='rock' />) {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === <img src={Paper} data-id='paper'/> && house ===  <img src={Scissors} data-id='scissors' />) {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
   Result();
  }, [house]);

  return (
    <Wrap className="game">
      <h2>My Choice: {myChoice} </h2>
      <br />
      <h2>House choice: {house} </h2>
      <br />
    
      <h2>Result: </h2>
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
    
      <Link to="/" onClick={() => setHouse()}>
        <h2>Play Again </h2>
      </Link>
    </Wrap>
  );
};

export default Game;