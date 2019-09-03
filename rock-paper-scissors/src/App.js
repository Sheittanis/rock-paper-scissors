import React, { useState, useEffect } from 'react';
import { Header, Icon, Grid, Image, Button } from 'semantic-ui-react'
import './App.css';

import RockPaperScissors from "./RockPapersScissors"
import Gamemodes from "./Gamemodes"

import { getNpcRandChoice } from "./util.js"
function App() {
  const [selection, setSelection] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [npcScore, setNpcScore] = useState(0);


  // getSelection = getSelection.bind(this);
  const getSelection = (value) => {
    setSelection(value);
    console.log("play")
  }

  useEffect(() => {
    play();
  }, [selection]);

  function play() {
    var npcChoice = getNpcRandChoice(3);
    findWinner(selection, npcChoice)
  }

  function findWinner(playerChoice, npcChoice) {
    console.log(playerChoice, npcChoice)
    if (playerChoice === npcChoice)resetGame();
    else if (playerChoice === 'rock' && npcChoice === 'paper') npcWin();
    else if (playerChoice === 'rock' && npcChoice === 'scissors') playerWin();
    else if (playerChoice === 'scissors' && npcChoice === 'rock') npcWin();
    else if (playerChoice === 'scissors' && npcChoice === 'paper') playerWin();
    else if (playerChoice === 'paper' && npcChoice === 'scissors') npcWin();
    else if (playerChoice === 'paper' && npcChoice === 'rock') playerWin();
  }

  function playerWin() {
    setPlayerScore(playerScore + 1)
    console.log(playerScore)
    resetGame();
  }

  function npcWin() {
    setNpcScore(npcScore + 1)
    resetGame();
  }
  const resetGame = () => {
    console.log("game reset")
  }

  return (
    <div className="App">
      <Header as='h1' color="yellow">Beat your friends and settle bets</Header>
      <Grid>
        {/* <Gamemodes></Gamemodes> */}

        <Grid.Row centered columns={2}>
          <Header as='h1'>Score</Header>
          <Grid.Column textAlign="left">
            YOU: {playerScore}
          </Grid.Column>
          <Grid.Column textAlign="right">
            NPC: {npcScore}
          </Grid.Column>
        </Grid.Row>

        <RockPaperScissors getSelection={getSelection}></RockPaperScissors>

        <Grid.Row centered>
          <Header as='h1'>{selection}</Header>
        </Grid.Row>
        <Grid.Row centered>
          <Button>New game</Button>
        </Grid.Row>
      </Grid>

    </div>
  );
}

export default App;
