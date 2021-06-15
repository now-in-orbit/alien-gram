import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {TransmissionsForm} from "./TransmissionsForm";
import "../Home.css"
import'../main-nav/sign-in/SignInStyle.css'


export const TransmissionModal = ({post}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow} className='createTransmission ml-1'>
                Create Transmission
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='backgroundColor'>
                    <Modal.Title>Create Transmission</Modal.Title>
                </Modal.Header>
                <Modal.Body className='backgroundColor'>
                    <TransmissionsForm post={post} />
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
