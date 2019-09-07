import React from 'react';
import { Grid } from 'semantic-ui-react'

import { vanillaSelections, friendsSelections, bbtSelections } from "../util.js"
import Selection from "./Selection"

const PlayerOptions = (props) => {
    const { getSelection, mode } = props;
    var selections = [];

    if (mode === "Vanilla") {
        selections = vanillaSelections
    }
    else if (mode === "Friends") {
        selections = friendsSelections
    }
    else if (mode === "The Big Bang Theory") {
        selections = bbtSelections
    }
    
    const options = (
        selections.map((option) =>
            <Selection option={option} getSelection={getSelection}></Selection>
        )
    );

    return (
        <Grid.Row columns={selections.length}>
            {options}
        </Grid.Row>
    )
}

export default PlayerOptions
