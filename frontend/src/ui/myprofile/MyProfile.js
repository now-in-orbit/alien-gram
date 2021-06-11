import React from "react"
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'


export const MyProfile = () => {
	return (
		<>
			<Container className='my-5'>
				<Row className="text-center">
					<Col>
						<h1>My Profile</h1>
						<Image src='https://www.placecage.com/c/300/300' fluid />
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md={5}>
						<Form>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" placeholder="Ibelieve_82" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" placeholder="Zim" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" placeholder="Invid" />
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="name@example.com" />
							</Form.Group>
							<Button type="submit" className='float-right'>Save</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}