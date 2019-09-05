import React, { useState, useEffect } from 'react';
import { Button, Header, Grid, Image, Dropdown, Icon } from 'semantic-ui-react'
import './App.css';

import PlayerOptions from "./components/PlayerOptions.jsx"
import { getNpcRandChoice } from "./util.js"

import FriendsThumb from "./images/friends.png"
import BigBangTheoryThumb from "./images/bigbangtheory.png"
import VanillaThumb from "./images/vanillaicecream.jpg"
import data from "./GamemodeData.js"

function App() {
  const [time, setTime] = useState(1000);
  const [result, setResult] = useState("");
  const [selection, setSelection] = useState("");
  const [npcSelection, setNpcSelection] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [npcScore, setNpcScore] = useState(0);
  const [modeImage, setImage] = useState(VanillaThumb);

  const getSelection = (playerChoice) => {
    setSelection(playerChoice);
    npcTurn(playerChoice);
  }

  function npcTurn(playerChoice) {
    var npcChoice = getNpcRandChoice(3);
    setNpcSelection(npcChoice);
    findWinner(playerChoice.value, npcChoice.value)
  }

  function findWinner(playerChoice, npcChoice) {
    if (playerChoice === npcChoice) draw();
    else if (playerChoice === 'rock' && npcChoice === 'paper') npcWin();
    else if (playerChoice === 'rock' && npcChoice === 'scissors') playerWin();
    else if (playerChoice === 'scissors' && npcChoice === 'rock') npcWin();
    else if (playerChoice === 'scissors' && npcChoice === 'paper') playerWin();
    else if (playerChoice === 'paper' && npcChoice === 'scissors') npcWin();
    else if (playerChoice === 'paper' && npcChoice === 'rock') playerWin();
  }

  function draw() {
    setResult("DRAW!");
    resetRound();
  }

  function playerWin() {
    setPlayerScore(playerScore + 1);
    setResult("VICTORY!");
    resetRound();
  }

  function npcWin() {
    setNpcScore(npcScore + 1)
    setResult("LOST!");
    resetRound();
  }

  const resetRound = () => {
    // setTimeout(() => {
    //   setSelection(" ");
    //   setNpcSelection(" ")
    //   setTime(1500);
    // }, time)
  }

  const resetGame = () => {
    setPlayerScore(0);
    setNpcScore(0);
  }

  const selectedMode = (e, { value }) => {
    e.persist();
    if (value === 'Friends') setImage(FriendsThumb)
    else if (value === 'The Big Bang Theory') setImage(BigBangTheoryThumb)
    else if (value === 'Vanilla') setImage(VanillaThumb)
  };

  return (
    <div className="App">
      <Header as='h1' color="yellow">Beat your friends and settle bets</Header>

      <Grid style={{ maxWidth: '65vw' }}>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Image src={modeImage} style={{ width: '200px', height: '200px' }}></Image>
          </Grid.Column>

          <Grid.Column width={8}>
            <Dropdown placeholder='Game mode :) ' selection options={data} onChange={selectedMode} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} centered>
          <Grid.Column textAlign="left">
            <Icon name={selection.name} size="huge" color="green" circular></Icon>
            <Header as='h1' color="green">YOU: {playerScore}</Header>
          </Grid.Column>
          
          <Grid.Column textAlign="center">
            <Header as='h1' color="orange">{result}</Header>
          </Grid.Column>

          <Grid.Column textAlign="right">
            <Icon name={npcSelection.name} size="huge" color="red" circular></Icon>
            <Header as='h1' color="red">NPC: {npcScore}</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="left">
            <Header as='h1' color="yellow" content={selection.value}></Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header as='h1' color="yellow" content={npcSelection.value}></Header>
          </Grid.Column>
        </Grid.Row>

        <PlayerOptions getSelection={getSelection}></PlayerOptions>

        <Grid.Row centered>
          <Button onClick={resetGame} color="red">Reset!</Button>
        </Grid.Row>
      </Grid>

    </div>
  );
}

export default App;
