import React from "react";
import './Welcome.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Ufo} from "../ufo-animation/Ufo"


export const Welcome = () => {
    return (
        <>
            <Container className="jumbo-bg" fluid>
                <Row>
                    <Col md={12}>
                        <h1>Welcome to AlienGram!</h1>
                        <br/>
                        <h2>Where you can connect and chat about extraterrestrial life</h2>
                    </Col>
                    <Ufo />
                </Row>

            </Container>
        </>
    )
}
