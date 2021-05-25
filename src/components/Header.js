import React from "react";
import {Top} from "../styles/SharedStyles";

const Header = ({ score }) => {
  return (
    <>
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{score}</div>
      </div>
      </div>
        <Top>CHOOSE YOUR HAND</Top>
    </>
    
  );
};

export default Header;