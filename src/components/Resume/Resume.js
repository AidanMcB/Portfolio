import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import myResume from '../../assets/myResume.pdf'
import { pdfjs } from 'react-pdf';
import { Responsive } from 'responsive-react';
import MediaQuery, { useMediaQuery } from 'react-responsive'
// Components 
import Software from './Software'
import Methodologies from './Methodologies'
import SoftSkills from './SoftSkills'
import Education from './Education'
import Employment from './EmploymentHistory'
// Styles
import {
    Card,
    Container,
    Segment,
    Button,
    Header,
    List,
    Grid,
    GridRow,
    GridColumn,
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
        <Container className="resume-page">
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
            <div><a className="resume-link" href={myResume} download>Download my resume</a></div>
        </Container>
    )
}