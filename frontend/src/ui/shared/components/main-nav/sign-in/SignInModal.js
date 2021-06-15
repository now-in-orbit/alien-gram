import React from "react";
import {Button, ModalFooter} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignInForm} from "./SignInForm";
import AlienVid from "../../../../../images/alien-hello/alien-1.mp4";
import './SignInStyle.css'
import "../../Home.css"


export const SignInModal = (props) => {
	const {handleShow, handleClose, show} = props


	return (
		<>
			<Button variant="outline-primary" onClick={handleShow} size='sm'className='signIn mx-2'>
				Sign In
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton className='backgroundColor'>
					<Modal.Title>Sign In</Modal.Title>
				</Modal.Header>
				<Modal.Body className='backgroundColor'>
					<SignInForm/>
				</Modal.Body>
				<div className='backgroundColor'>
					<video className='backgroundIMGSize' autoPlay muted >
						<source src={AlienVid} type='video/mp4'/>
					</video>
				</div>
			</Modal>
		</>
	);
}
