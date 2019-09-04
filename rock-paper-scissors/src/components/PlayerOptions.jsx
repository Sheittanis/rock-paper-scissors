import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react'

import data from "../SelectionData.js"
import Selection from "./Selection"

const PlayerOptions = (props) => {
    const { getSelection } = props;

    // useEffect(() => {
    //     console.log(" w")
    //     // play()
    // }, [getSelection]);

    // const selected = (i, j) => {
    //     getSelection(i.value)
    // }

    const options = (
        data.map((option) =>
            <Selection option={option} getSelection={getSelection}></Selection>
        )
    );

    return (
        <Grid.Row columns={data.length}>
            {options}
        </Grid.Row>
    )
}

export default PlayerOptions
