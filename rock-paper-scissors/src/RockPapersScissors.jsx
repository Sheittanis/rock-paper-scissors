import React, { useState, useEffect } from 'react';
import { Icon, Grid } from 'semantic-ui-react'

import data from "./GamemodeData.js"
import { getNpcRandChoice } from "./util.js"

const RockPaperScissorsSelection = (props) => {
    const {getSelection } = props;

    const selected = (i, j) =>{
        getSelection(i.value)
    }

    const options = (
        data.map((option) =>
            <Grid.Column key={option.id} className="selection" onClick={(event)=>selected(option, event)}>
                <Icon name={option.name} size="massive"></Icon>
            </Grid.Column>
        )
    );

    return (
        <Grid.Row columns={data.length}>
            {options}
        </Grid.Row>
    )
}

export default RockPaperScissorsSelection
