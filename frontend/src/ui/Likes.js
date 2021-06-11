import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


export const Likes = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mt-5">My Likes</h1>
                    </Col>
                </Row>
                <Row>
                    <ThreadComponent />
                </Row>
            </Container>

        </>
    )
}
