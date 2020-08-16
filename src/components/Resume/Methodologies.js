import React from 'react';
// Styles
import {
    Container,
    Header,
    Grid,
    List
} from 'semantic-ui-react'

export default function Methodologies () {

    const methodologies = ['Test-Driven Development', 'Object-Oriented Programming',
    'MVC', 'REST API', 'Technical Writing', 'Debugging', 'Solutions', 'Customer Needs',
    'Troubleshooting']

    const methodologiesSkills = methodologies.map( method => <List.Item>{method}</List.Item>)

    return(
        <Container className="methodologies-container">
            <Header>Methodologies</Header>
            <Grid columns={3}>
                {methodologiesSkills}
            </Grid>
        </Container>
    )
}