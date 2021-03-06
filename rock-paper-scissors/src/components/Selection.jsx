import React, { useState } from 'react'
import { Grid, Icon, Header } from 'semantic-ui-react'

const Selection = (props) => {
    const [color, setColor] = useState();
    const { option, getSelection } = props

    const selected = (i, j) => {
        getSelection(i)
    }
    return (
        <Grid.Column mobile={16} computer={3} key={option.id} className="selection" onClick={(event) => selected(option, event)}>
            <Icon name={option.name} size="huge" color={color} circular></Icon>
            <Header as='h1' color="teal">{option.description} </Header>
        </Grid.Column>
    )
}

export default Selection
