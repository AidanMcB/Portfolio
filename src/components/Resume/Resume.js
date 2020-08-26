import React from 'react';
// Components 
import Software from './Software'
import Methodologies from './Methodologies'
import SoftSkills from './SoftSkills'
import Education from './Education'
import Employment from './EmploymentHistory'
// Styles
import {
    Container,
    Segment,
    Button,
    Header,
    List,
    Grid,
} from 'semantic-ui-react'

export default function Resume() {
    return (
        <Container className="resume-page">
            <Grid columns={2}>
                <Grid.Row only="tablet computer" style={{alignItems:"center"}}>
                <Grid.Column >
                        <Education />
                        <Employment />
                    </Grid.Column>
                    <Grid.Column>
                        <Software />
                        <Methodologies />
                        <SoftSkills />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}