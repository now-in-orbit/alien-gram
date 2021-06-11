import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import {TransmissionComponent} from "./transmissions/TransmissionComponent";

export const Transmissions = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mt-5">My Transmissions</h1>
                    </Col>
                </Row>
                <Row>
                    <TransmissionComponent />
                </Row>
            </Container>

        </>
    )
}
