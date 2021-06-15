import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignUpForm} from "./SignUpForm";
import '../sign-in/SignInStyle.css'


export const SignUpModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="outline-primary" onClick={handleShow} size='sm' className='mx-2' >
				Sign Up
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton className='backgroundColor'>
					<Modal.Title>Sign Up</Modal.Title>
				</Modal.Header>
				<Modal.Body className='backgroundColor'>
					<SignUpForm/>
				</Modal.Body>
				<Modal.Footer className='backgroundColor'>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
