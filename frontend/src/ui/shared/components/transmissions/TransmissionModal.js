import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {TransmissionsForm} from "./TransmissionsForm";
import "../Home.css"
import'../main-nav/sign-in/SignInStyle.css'
import AlienVid from "../../../../images/alien-hello/Ufo-2.mp4";


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
                <div className='backgroundColor'>
                    <video className='backgroundIMGSize' autoPlay muted >
                        <source src={AlienVid} type='video/mp4'/>
                    </video>
                </div>
                <Modal.Footer className='backgroundColor'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
