import React from 'react';
import { Header, Icon, Grid, Image } from 'semantic-ui-react'

import friendsThumb from "./images/friends.png"
import bigBangTheoryThumb from "./images/bigbangtheory.png"

const GameModes = (props) => {
    return (
        <Grid.Row className="justifyCenter" columns={3}>
          <Grid.Column>
            <Image src={friendsThumb}></Image>
          </Grid.Column>
          <Grid.Column>
            <Header as='h1' color="yellow">VANILLA</Header>
          </Grid.Column>
          <Grid.Column>
            <Image src={bigBangTheoryThumb} style={{ width: '200px', height: '200px' }}></Image>
          </Grid.Column>
        </Grid.Row>

    )
}

export default GameModes
