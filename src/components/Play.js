import React from "react";
import { Link } from "react-router-dom";
import {Icon} from "semantic-ui-react";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            
          >Paper</div>
        </Link>
        
        <Link to="/game">
        <Icon name='hand scissors'>
          <div
            data-id="scissors"
            onClick={setChoice}
          >Scissors</div>
        </Icon>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          >Rock</div>
        </Link>
      
    </div>
  );
};

export default Play;
