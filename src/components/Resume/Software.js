import React from 'react'

// Styles
import {
    Container,
    Header,
    List,
    Grid
} from 'semantic-ui-react';

export default function Software() {

    const softwareSkills = ['Active Record', 'Angular', 'Back-End Development', 'Bootstrap',
        'CSS', 'Design', 'ES6', 'Express.js', 'Firebase', 'Front-End Development', 'Full-Stack Development',  'Git', 'Github',
        'HTML', 'JavaScript', 'Mailgun', 'Next.js', 'Node.js', 'OAuth', 'PostgresSQL', 'React.js', 'Redux.js', 'Ruby',
        'Ruby on Rails', 'Semantic-UI/ Semantic-UI-React', 'Sinatra', 'Software Development', 'SQL',
        'SQLite', 'Trello', 'Version Control', 'Webpack', 'Web Development', 'Web Applications']

    const skillsList = softwareSkills.map( (skill, index) => <List.Item key={index}>{skill}</List.Item>) 
    return(
        <Container className="software-container">
        <Header>Programming Languages / Software </Header>
            <Grid columns={3}>
            {skillsList}
            </Grid>
        </Container>
    )
}