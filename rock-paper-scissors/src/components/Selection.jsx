import React, { useState } from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const Selection = (props) => {
    const [color, setColor] = useState(" ");
    const { option, getSelection } = props

    const selected = (i, j) => {
        getSelection(i.value)
        // setColor("yellow")
    }

    return (
        <Grid.Column key={option.id} className="selection" onClick={(event) => selected(option, event)}>
            <Icon name={option.name} size="massive" color={color} circular></Icon>
        </Grid.Column>

    )
}

export default Selection
