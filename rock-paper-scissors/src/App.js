import React, { useState, useEffect } from 'react';
import { Button, Header, Grid, Image, Dropdown, Icon } from 'semantic-ui-react'
import './App.css';

import PlayerOptions from "./components/PlayerOptions.jsx"
import { getNpcRandChoice, getBalloon } from "./util.js"

import FriendsThumb from "./images/friends.png"
import BigBangTheoryThumb from "./images/bigbangtheory.png"
import VanillaThumb from "./images/vanillaicecream.jpg"
import data from "./GamemodeData.js"

function App() {
  const [mode, setMode] = useState("Vanilla");
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
    if(playerChoice.value === "fire") {            
      var npcChoice = getBalloon();
      setNpcSelection(npcChoice);
      easterEgg(); // easter egg
    }
    else{
      var npcChoice = getNpcRandChoice(3);
      setNpcSelection(npcChoice);
      findWinner(playerChoice.value, npcChoice.value)
    }
  }

  function findWinner(playerChoice, npcChoice) {
    if (playerChoice === npcChoice) draw();
    else if (playerChoice === 'rock' && (npcChoice === 'scissors' || npcChoice ==='lizard')) playerWin();
    else if (playerChoice === 'rock' && (npcChoice === 'paper' || npcChoice ==='spock')) npcWin();   
    else if (playerChoice === 'paper' && (npcChoice === 'rock' || npcChoice ==='spock')) playerWin();
    else if (playerChoice === 'paper' && (npcChoice === 'scissors' || npcChoice ==='lizard')) npcWin(); 
    else if (playerChoice === 'scissors' && (npcChoice === 'paper' || npcChoice ==='lizard')) playerWin();
    else if (playerChoice === 'scissors' && (npcChoice === 'rock' || npcChoice ==='spock')) npcWin();
    else if (playerChoice === 'lizard' && (npcChoice === 'spock' || npcChoice ==='paper')) playerWin();
    else if (playerChoice === 'lizard' && (npcChoice === 'rock' || npcChoice ==='scissors')) npcWin();
    else if (playerChoice === 'spock' && (npcChoice === 'rock' || npcChoice ==='scissors')) playerWin();
    else if (playerChoice === 'spock' && (npcChoice === 'paper' || npcChoice ==='lizard')) npcWin();
    else draw();
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
  function easterEgg(){
    setNpcScore(npcScore + 1)
    setResult('"Yeah but does it beat water balloon?"');
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
    setResult(" ");
  }

  const selectedMode = (e, { value }) => {
    // e.persist();
    setMode(value)
    if (value === 'Friends') setImage(FriendsThumb)
    else if (value === 'The Big Bang Theory') setImage(BigBangTheoryThumb)
    else if (value === 'Vanilla') setImage(VanillaThumb)
  };

  const playerOptions = (
      <PlayerOptions getSelection={getSelection} mode={mode}></PlayerOptions>
  )
    

  return (
    <div className="App">
      {/* <Header as='h1' color="yellow">Beat your friends and settle bets</Header> */}
      <Header as='h1' color="yellow">Not your average rock paper scissors.</Header>

      <Grid style={{ maxWidth: '65vw', minHeight: '80vh' }}>
        <Grid.Row columns={2} centered>
          {/* <Grid.Column width={8}>
            <Image src={modeImage} style={{ width: '200px', height: '200px' }}></Image>
          </Grid.Column> */}

          <Grid.Column >
            <Dropdown placeholder='Vanilla' fluid selection options={data} onChange={selectedMode} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} centered verticalAlign="middle">
          <Grid.Column textAlign="left">
            <Icon name={selection.name} size="big" color="green" circular></Icon>
            <Header as='h1' color="green">YOU: {playerScore}</Header>
          </Grid.Column>

          <Grid.Column textAlign="center">
            <Header as='h1' color="orange">{result}</Header>
          </Grid.Column>

          <Grid.Column textAlign="right">
            <Icon name={npcSelection.name} size="big" color="red" circular></Icon>
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

        {playerOptions}
        {/* <PlayerOptions getSelection={getSelection}></PlayerOptions> */}

        <Grid.Row centered>
          <Button onClick={resetGame} color="red">Reset!</Button>
        </Grid.Row>
      </Grid>

    </div>
  );
}

export default App;
