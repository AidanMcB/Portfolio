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
                <Grid.Row>
                    <Grid.Column style={{ width: "100%" }}>
                        <Education />
                    </Grid.Column>
                    <Grid.Column>
                            <Employment />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Software />
                    </Grid.Column>
                    <Grid.Column>
                        <Methodologies />
                    </Grid.Column>
                    <Grid.Column>
                        <SoftSkills />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}