import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react'

// import data from "../SelectionData.js"

import { selectionData } from "../util.js"
import Selection from "./Selection"

const PlayerOptions = (props) => {
    const { getSelection } = props;

    const options = (
        selectionData.map((option) =>
            <Selection option={option} getSelection={getSelection}></Selection>
        )
    );

    return (
        <Grid.Row columns={selectionData.length}>
            {options}
        </Grid.Row>
    )
}

export default PlayerOptions
