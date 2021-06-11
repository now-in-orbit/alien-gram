import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ThreadComponent} from "../shared/components/ThreadComponent";
import {TransmissionComponent} from "../shared/components/transmissions/TransmissionComponent";

export const MyTransmissions = () => {
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
