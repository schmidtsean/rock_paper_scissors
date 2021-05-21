import React from "react";
import { Link } from "react-router-dom";
import {Icon} from "semantic-ui-react";
import {Wrap, Scissors, Paper, Rock} from "../styles/SharedStyles";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <Wrap  className="play">
      <Paper>  
        <Link to="/game">
          <Icon 
            size='massive'
            name='hand paper outline' 
            onClick={setChoice}
            data-id='paper' />
        </Link>
      </Paper>
      <Scissors>
        <Link to="/game">
          <Icon 
            size='massive'
            name='hand scissors outline'
            onClick={setChoice}
            data-id='scissors' />
        </Link>
      </Scissors>
      <Rock>
        <Link to="/game">
          <Icon 
            size='massive'
            name='hand rock outline'
            onClick={setChoice}
            data-id='rock' />
        </Link>
      </Rock> 
    </Wrap>
  );
};

export default Play;
