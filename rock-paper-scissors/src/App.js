import React, { useState, useEffect } from 'react';
import { Header, Grid, Image, Dropdown } from 'semantic-ui-react'
import './App.css';

import RockPaperScissors from "./RockPapersScissors"
import { getNpcRandChoice } from "./util.js"
// import Gamemodes from "./Gamemodes"

import FriendsThumb from "./images/friends.png"
import BigBangTheoryThumb from "./images/bigbangtheory.png"
import VanillaThumb from "./images/vanillaicecream.jpg"
import data from "./GamemodeData.js"

function App() {
  const [selection, setSelection] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [npcScore, setNpcScore] = useState(0);
  const [modeImage, setImage] = useState(VanillaThumb);

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

  // setTimeout(() => {
  //   // this.setState({ position: 1 });
  //   console.log("?")
  // }, 3000);

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
  const selectedMode = (e, {value}) => {
    e.persist();
    // console.log(e.target.textContent);
    // console.log(value)
    if (value === 'Friends') setImage(FriendsThumb)
    else if (value === 'The Big Bang Theory') setImage(BigBangTheoryThumb)
    else if (value === 'Vanilla') setImage(VanillaThumb)
  };
  
  return (
    <div className="App">
      <Header as='h1' color="yellow">Beat your friends and settle bets</Header>
      <Image src={modeImage}  style={{ width: '200px', height: '200px' }}></Image>

      {/* <Image src={FriendsThumb}></Image> */}
      <Grid style={{maxWidth: '65vw' }}>
      <Dropdown placeholder='Game mode :) 'fluid selection options={data} onChange={selectedMode}/>
        {/* <Gamemodes></Gamemodes> */}

        <Grid.Row centered columns={2}>
          {/* <Header as='h1'>Score</Header> */}
          <Grid.Column textAlign="left">
            <Header as='h1' color="green">YOU: {playerScore}</Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header as='h1' color="red">NPC: {npcScore}</Header>
          </Grid.Column>
        </Grid.Row>

        <RockPaperScissors getSelection={getSelection}></RockPaperScissors>
      </Grid>

    </div>
  );
}

export default App;
