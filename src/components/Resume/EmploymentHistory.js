import React, { useState } from 'react';
// Styles
import {
    Accordion,
    Container,
    Header,
    Icon,
    Item,
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
                    <p style={{ fontWeight: "400" }}>Lakehurst, New Jersey- Manager (May 2009, December 2019) </p>
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
                    Kerbey Lane
                    <p style={{fontWeight:"400"}}>Austin, Texas - Server (June 2017 - August 2017)</p>
                </Accordion.Title>
                    <Accordion.Content active={kerbey}>
                        <List bulleted className="kerbey-list">
                            <List.Item>Communication, time management, and organizational skills</List.Item>
                            <List.Item>Customer service in a fast paced environment maintaining professionalism </List.Item>
                            <List.Item>Built a strong connection with fellow employees and employers</List.Item>
                        </List>
                    </Accordion.Content>
            </Accordion>

            <Accordion>
                <Accordion.Title
                    style={{ fontWeight: "bold" }}
                    exlusive={"false"}
                    onClick={mtmsClick}>
                    <Icon name="dropdown" />
                    Manchester Board of Education
                    <p style={{fontWeight:"400"}}>Manchester, New Jersey - Facilities Manager (January 2019 - September 2019)</p>
                </Accordion.Title>
                    <Accordion.Content active={mtms}>
                        <List bulleted className="mtms-list">
                            <List.Item>Ability to prioritize and manage multi-functional tasks </List.Item>
                            <List.Item>Contact with personnel within the district as well as vendors </List.Item>
                            <List.Item>Work effectively under pressure, and against strict time constraints </List.Item>
                        </List>
                    </Accordion.Content>
            </Accordion>

        </Container>
    )
}