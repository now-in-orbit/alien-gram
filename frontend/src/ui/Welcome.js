import React from "react";
import './Welcome.css';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';


export const Welcome = () => {
	return (
		<>
			<Jumbotron>
				<Container className="jumbo-bg">
					<Row>
						<Col lg={12} sm={6}>
							<h1>Welcome to AlienGram! </h1>
							<h2>A place for alien enthusiasts and skeptics to post encounters and connect with each other!</h2>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</>
	)
}