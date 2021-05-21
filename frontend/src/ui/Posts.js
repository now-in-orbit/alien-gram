import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ThreadComponent} from "./components/ThreadComponent";

export const Posts = () => {
    return (
        <>
         <Container>
             <Row>
                 <Col>
                     <h1 className="text-center mt-5">My Posts</h1>
                 </Col>
             </Row>
             <Row>
                 <ThreadComponent />
             </Row>
         </Container>

        </>
    )
}
