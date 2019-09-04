import React, { useState } from 'react';
import { Icon, Grid } from 'semantic-ui-react'

import data from "./SelectionData.js"
import GridColumns from "./GridColumns"

const RockPaperScissorsSelection = (props) => {
    const { getSelection } = props;

    // const selected = (i, j) => {
    //     getSelection(i.value)
    // }

    const options = (
        data.map((option) =>
            <GridColumns option={option} getSelection={getSelection}></GridColumns>
        )
    );

    return (
        <Grid.Row columns={data.length}>
            {options}
        </Grid.Row>
    )
}

export default RockPaperScissorsSelection
