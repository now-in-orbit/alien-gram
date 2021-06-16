import React, {useState} from "react";
import {Button, Container} from 'react-bootstrap';
import {Modal} from "react-bootstrap";
import {PostForm} from "./PostForm";
import "../../Home.css"
import '../sign-in/SignInStyle.css'
import AlienVid from "../../../../../images/alien-hello/Ufo-1.mp4";


export const PostModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
            <Button onClick={handleShow} className='createButton float-right btn-lg btn'>
                Create Post
            </Button>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='backgroundColor'>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className='backgroundColor'>
                    <PostForm />
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
