import React, { useState, useEffect } from 'react';
import { Icon, Grid } from 'semantic-ui-react'

import data from "./GamemodeData.js"
import { getNpcRandChoice } from "./util.js"

const RockPaperScissorsSelection = (props) => {
    const [selection, setSelection] = useState("");
    collectState = collectState.bind(this);

    function collectState() {
        return selection;
    }

    useEffect(() => {
        props.getSelection(collectState());
    });


    const selected = (i, j) =>{
        setSelection(i.name)
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
