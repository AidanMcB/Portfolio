import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import myResume from '../../assets/myResume.pdf'
import { pdfjs } from 'react-pdf';
import MediaQuery, { useMediaQuery } from 'react-responsive'
// Components 
import Software from './Software'
import Methodologies from './Methodologies'
import SoftSkills from './SoftSkills'
import Education from './Education'
import Employment from './EmploymentHistory'
// Styles
import {
    Container,
    Grid,
    Header,
} from 'semantic-ui-react'

export default function Resume() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Container id="resume" className="resume-page">
             <Header style={{
                    color:"white",
                    marginTop:"40px",
                    textShadow:"2px 2px black",
                    fontSize: "32px"
                }} as="h1">Resume</Header>
            <MediaQuery minDeviceWidth={1224} device={isDesktopOrLaptop}>
                <Grid className="res-grid" columns={2}>
                    <Grid.Row
                        style={{ alignItems: "center" }}>
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
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224} device={isTabletOrMobile}>
                <Container className="resume-container">
                    <Document className="PDFDocument" file={myResume}
                        onLoadSuccess={onDocumentLoadSuccess}>
                        <Page className="PDFPage" pageNumber={pageNumber}></Page>
                    </Document>
                </Container>
            </MediaQuery>
        </Container>
    )
}