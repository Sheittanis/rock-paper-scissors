import React, { useState } from 'react';
import { Header, Icon, Grid, Image, Button } from 'semantic-ui-react'
import './App.css';

import RockPaperScissors from "./RockPapersScissors"
import Gamemodes from "./Gamemodes"

function App() {
  const [selection, setSelection] = useState();

  getSelection = getSelection.bind(this);

  function getSelection(value) {
    setSelection(value);
    console.log("play")
  }

  return (
    <div className="App">
      <Header as='h1' color="yellow">Beat your friends</Header>
      <Grid>
        {/* <Gamemodes></Gamemodes> */}

        <Grid.Row centered columns={2}>
          <Header as='h1'>Score</Header>
          <Grid.Column>
            YOU: 0
          </Grid.Column>
          <Grid.Column>
            NPC: 0
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
