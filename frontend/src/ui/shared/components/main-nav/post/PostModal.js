import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {PostForm} from "./PostForm";
import "../../Home.css"
import '../sign-in/SignInStyle.css'


export const PostModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className='createButton float-right btn-lg btn'>
                Create Post
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='backgroundColor'>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className='backgroundColor'>
                    <PostForm />
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
