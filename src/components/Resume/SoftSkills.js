import React from 'react';
// Styles 
import {
    Container,
    Header,
    Grid,
    List
} from 'semantic-ui-react';

export default function SoftSkills(){

    const softSkills = ['Constructive Feedback', 'Teamwork',
        'Project Management', 'Public Speaking', 'Problem Solving', 
        'Collaborative Problem Solving', 'Technical Coach', 'Written and Verbal Communication',
        'Leadership', 'Time Management']

    const softSkillsList = softSkills.map( skill => <List.Item>{skill}</List.Item>)

    return(
        <Container className="softskills-container">
            <Header>Soft Skills</Header>
            <Grid>
                {softSkillsList}
            </Grid>
        </Container>
    )
}