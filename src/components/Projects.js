import React from 'react';
// Images
import weatherAppImg from '../assets/mosi-knife.jpg'
import ddBG from '../assets/d&dbackground.jpg'
import todaysMealImg from '../assets/todays-meal.png'
import reactCalc from '../assets/react-calc.png'
// Styles 
import {
    Grid,
    Card,
    Image,
    Container,
    Header,
} from 'semantic-ui-react';

export default function Projects() {

    return (
        <Container id="projects" style={{ align: "Center", margin: "0 auto" }}
            className="projects-page">
            <Header style={{
                marginTop: "0.75em",
                textShadow: "2px 2px black",
                fontSize: "2.75em"
            }} className="projects-header">
                Projects</Header>
            <Grid columns='equal' style={{ align: "center", margin: "0 auto" }}
                className="projects-grid" >
                <Grid.Row only="computer" columns={3}>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="weather-app-card" onClick={() => window.location = "https://react-weather-app-mcb.netlify.app/"}>
                            <Image src={weatherAppImg} wrapped></Image>
                            <Card.Content >
                                <Card.Header>React Weather App</Card.Header>
                                <Card.Meta>React, CSS</Card.Meta>
                                <Card.Description>
                                    A simple react app to tell the weathere. Enter your zip code to see today's forecast for your area. Built using the Open Weather API.
                        </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="dd-dice-card" onClick={() => window.location = "https://aidanmcb.github.io/DandDDiceApp/"}>
                            <Image src={ddBG} wrapped></Image>
                            <Card.Content>
                                <Card.Header>Dungeons and Dragons Dice Roller</Card.Header>
                                <Card.Meta>HTML, CSS, JavaScript</Card.Meta>
                                <Card.Description>
                                    Roll six different types of dice or convert any of the currencies coinciding with the popular board game, Dungeons and Dragons. Includes a simple calculator.
                        </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="todays-meal-card" onClick={() => window.location = "https://todays-meal.herokuapp.com/"}>
                            <Image src={todaysMealImg} wrapped></Image>
                            <Card.Content>
                                <Card.Header>Today's Meal</Card.Header>
                                <Card.Meta>Ruby on Rails, CSS</Card.Meta>
                                <Card.Description>
                                    Browse delicious recipes online to spice up your cooking repertoire. Create your own profile and upload your own recipes to share with the world!
                        </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                {/* Three per row, start next row here */}
                <Grid.Row only="computer" columns={3}>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="react-calc-card" onClick={() => window.location = "https://react-calc-mcb.netlify.app/"}>
                            <Image src={reactCalc} wrapped></Image>
                            <Card.Content>
                                <Card.Header>React Calculator App</Card.Header>
                                <Card.Meta>React, CSS</Card.Meta>
                                <Card.Description>
                                    Perform basic calculator functions on a responsive React built calcuator. Built with mobile first in mind.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="sketch-up-card" onClick={() => window.location = "https://react-calc-mcb.netlify.app/"}>
                            <iframe title="sketch-up" src="https://www.youtube.com/embed/f-m9pAdYQAw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <Card.Content>
                                <Card.Header>Sketch Up</Card.Header>
                                <Card.Meta>React, Ruby on Rails, Semantic UI React</Card.Meta>
                                <Card.Description>
                                    Upload and edit or draw your own pictures to save and share with friends
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="backyard-garden-card" onClick={() => window.location = "https://react-calc-mcb.netlify.app/"}>
                            <iframe title="backyard-garden" src="https://www.youtube.com/embed/f7GtvgvfekU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <Card.Content>
                                <Card.Header>Backyard Garden</Card.Header>
                                <Card.Meta>React, Redux, Ruby on Rails, Semantic UI React, CSS</Card.Meta>
                                <Card.Description>
                                    Track the growth of the crops in your garden, share pictures and posts, and see weather updates
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/* Mobile Projects Display */}

            <Grid columns='equal' style={{ align: "center", margin: "0 auto" }}
                className="projects-grid" >
                <Grid.Row only="mobile tablet mobile" columns={2}>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="weather-app-card" onClick={() => window.location = "https://react-weather-app-mcb.netlify.app/"}>
                            <Image src={weatherAppImg} wrapped></Image>
                            <Card.Content >
                                <Card.Header>React Weather App</Card.Header>
                                <Card.Meta>React, CSS</Card.Meta>
                                {/* <Card.Description>
                            A simple react app to tell the weathere. Enter your zip code to see today's forecast for your area. Built using the Open Weather API.
                        </Card.Description> */}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="dd-dice-card" onClick={() => window.location = "https://aidanmcb.github.io/DandDDiceApp/"}>
                            <Image src={ddBG} wrapped></Image>
                            <Card.Content>
                                <Card.Header>Dungeons and Dragons Dice Roller</Card.Header>
                                <Card.Meta>HTML, CSS, JavaScript</Card.Meta>
                                {/* <Card.Description>
                            Roll six different types of dice or convert any of the currencies coinciding with the popular board game, Dungeons and Dragons. Includes a simple calculator.
                        </Card.Description>  */}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile tablet mobile" columns={2}>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="todays-meal-card" onClick={() => window.location = "https://todays-meal.herokuapp.com/"}>
                            <Image src={todaysMealImg} wrapped></Image>
                            <Card.Content>
                                <Card.Header>Today's Meal</Card.Header>
                                <Card.Meta>Ruby on Rails, CSS</Card.Meta>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="react-calc-card" onClick={() => window.location = "https://react-calc-mcb.netlify.app/"}>
                            <Image src={reactCalc} wrapped></Image>
                            <Card.Content>
                                <Card.Header>React Calculator</Card.Header>
                                <Card.Meta>React, CSS</Card.Meta>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile tablet mobile" columns={2}>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="sketch-up-card" onClick={() => window.location = "https://react-calc-mcb.netlify.app/"}>
                            <iframe title="sketch-up-mobile" src="https://www.youtube.com/embed/f-m9pAdYQAw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <Card.Content>
                                <Card.Header>Sketch Up</Card.Header>
                                <Card.Meta>React, Ruby on Rails, Semantic UI React</Card.Meta>
                                {/* <Card.Description>
                                Upload and edit or draw your own pictures to save and share with friends
                                </Card.Description> */}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={8} computer={4}>
                        <Card className="react-calc-card" onClick={() => window.location = "https://react-calc-mcb.netlify.app/"}>
                            <iframe title="backyard-garden-mobile" src="https://www.youtube.com/embed/f7GtvgvfekU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <Card.Content>
                                <Card.Header>Backyard Garden</Card.Header>
                                <Card.Meta>React, Redux, Ruby on Rails, Semantic UI React, CSS</Card.Meta>
                                {/* <Card.Description>
                                Track the growth of the crops in your garden, share pictures and posts, and see weather updates
                                </Card.Description> */}
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Row>

                    </Grid.Row>
                </Grid.Row>
            </Grid>
        </Container>
    )
}