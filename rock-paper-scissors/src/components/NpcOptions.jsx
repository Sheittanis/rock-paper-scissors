import React, { useState, useEffect } from 'react';
import { Icon, Grid } from 'semantic-ui-react'

import data from "../SelectionData.js"

const NpcOptions = (props) => {
    const {getSelection } = props;

    // const selected = (i, j) =>{
    //     getSelection(i.value)
    // }

    const options = (
        data.map((option) =>
            <Grid.Column key={option.id} className="selection">
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

export default NpcOptions
