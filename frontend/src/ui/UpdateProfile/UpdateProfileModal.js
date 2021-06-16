import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {EditProfileForm} from "./EditProfileForm";
import './UpdateProfileStyle.css'
import '../shared/components/Home.css'



export const UpdateProfileModal = ({profile}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} block className='createButton mt-5'>
                Update Profile
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton className='backgroundColor'>
                    <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className='backgroundColor'>

                    <EditProfileForm profile={profile} />
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
