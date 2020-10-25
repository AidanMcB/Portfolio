import React, { useState } from 'react';
// Styles
import {
    Accordion,
    Container,
    Header,
    Icon,
    List,
} from 'semantic-ui-react';

export default function EmploymentHistory() {

    const [cp, seeCP] = useState(false)
    const cpClick = () => {
        seeCP(!cp)
    }
    const [kerbey, seeKerbey] = useState(false)
    const kerbeyClick = () => {
        seeKerbey(!kerbey)
    }
    const [mtms, seeMtms] = useState(false)
    const mtmsClick = () => {
        seeMtms(!mtms)
    }
    return (
        <Container className="employment-container">
            <Header as="h2" >Employment History</Header>
            <Accordion>
                <Accordion.Title
                    style={{ fontWeight: "bold" }}
                    exlusive={"false"}
                    onClick={cpClick}>
                    <Icon name="dropdown" />
                    Cedar Post Farm Market
                    <p style={{ fontWeight: "400" }}>Lakehurst, New Jersey - Manager (May 2009, December 2019) </p>
                </Accordion.Title>
                <Accordion.Content active={cp}>
                    <List bulleted className="cp-list">
                        <List.Item> Customer Service/ Cashier/ Stocking/ Planting / Networking </List.Item>
                        <List.Item> Delegating responsibilities among employees</List.Item>
                        <List.Item> Local WIC distribution to eligible communities</List.Item>
                        <List.Item> Time dependent task management</List.Item>
                    </List>
                </Accordion.Content>
            </Accordion>

            <Accordion>
                <Accordion.Title
                    style={{ fontWeight: "bold" }}
                    exlusive={"false"}
                    onClick={kerbeyClick}>
                    <Icon name="dropdown" />
                    Recovey Advisor
                    <p style={{fontWeight:"400"}}>Remote - React Developer (September 2020 - current)</p>
                </Accordion.Title>
                    <Accordion.Content active={kerbey}>
                        <List bulleted className="kerbey-list">
                            <List.Item>React based UI with Material Core styling </List.Item>
                            <List.Item>Github workflow, trello board task management, weekly sprint meetings</List.Item>
                            <List.Item>Work one on one with senior developers in pair programming</List.Item>
                        </List>
                    </Accordion.Content>
            </Accordion>

            <Accordion>
                <Accordion.Title
                    style={{ fontWeight: "bold" }}
                    exlusive={"false"}
                    onClick={mtmsClick}>
                    <Icon name="dropdown" />
                    Your Journey
                    <p style={{fontWeight:"400"}}> Remote - Lead Developer, Freelance, (September 2020 - current)</p>
                </Accordion.Title>
                    <Accordion.Content active={mtms}>
                        <List bulleted className="mtms-list">
                            <List.Item>React based web application for a personalized website</List.Item>
                            <List.Item>Work directly with client to meet their needs</List.Item>
                            <List.Item>Designed logo with Figma art tool, handle email with MailGun</List.Item>
                        </List>
                    </Accordion.Content>
            </Accordion>

        </Container>
    )
}