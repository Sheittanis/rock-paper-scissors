import React, { useState, useEffect } from 'react';
import { Header,  Grid } from 'semantic-ui-react'
import './App.css';

import RockPaperScissors from "./RockPapersScissors"
import { getNpcRandChoice } from "./util.js"

function App() {
  const [selection, setSelection] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [npcScore, setNpcScore] = useState(0);

  const getSelection = (value) => {
    setSelection(value);
  }

  useEffect(() => {
    play();
  }, [selection]);

  function play() {
    var npcChoice = getNpcRandChoice(3);
    findWinner(selection, npcChoice)
  }

  function findWinner(playerChoice, npcChoice) {

    if (playerChoice === npcChoice) resetGame();
    else if (playerChoice === 'rock' && npcChoice === 'paper') npcWin();
    else if (playerChoice === 'rock' && npcChoice === 'scissors') playerWin();
    else if (playerChoice === 'scissors' && npcChoice === 'rock') npcWin();
    else if (playerChoice === 'scissors' && npcChoice === 'paper') playerWin();
    else if (playerChoice === 'paper' && npcChoice === 'scissors') npcWin();
    else if (playerChoice === 'paper' && npcChoice === 'rock') playerWin();
  }

  function playerWin() {
    setPlayerScore(playerScore + 1)
    resetGame();
  }

  function npcWin() {
    setNpcScore(npcScore + 1)
    resetGame();
  }

  const resetGame = () => {
    setSelection("");
  }

  return (
    <div className="App">
      <Header as='h1' color="yellow">Beat your friends and settle bets</Header>
      <Grid>
        {/* <Gamemodes></Gamemodes> */}

        <Grid.Row centered columns={2}>
          {/* <Header as='h1'>Score</Header> */}
          <Grid.Column textAlign="left">
            YOU: {playerScore}
          </Grid.Column>
          <Grid.Column textAlign="right">
            NPC: {npcScore}
          </Grid.Column>
        </Grid.Row>

        <RockPaperScissors getSelection={getSelection}></RockPaperScissors>
      </Grid>

    </div>
  );
}

export default App;
