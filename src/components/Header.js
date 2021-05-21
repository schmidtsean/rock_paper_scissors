import React from "react";
import {Head, ScoreWrap} from '../styles/SharedStyles';

const Header = ({ score }) => {
  return (
    <Head className="header">
      <ScoreWrap>Score: {score}</ScoreWrap>
    </Head>
  );
};

export default Header;