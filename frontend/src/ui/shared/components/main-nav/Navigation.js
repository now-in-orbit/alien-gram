import React, {useState, useEffect} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Navigation.css';
import {fetchAuth} from '../../../../store/auth';
import {SignInModal} from './sign-in/SignInModal';
import {SignUpModal} from './sign-up/SignUpModal';
import {SignOut} from './sign-out/SignOut';
import {useDispatch, useSelector} from 'react-redux';

export const Navigation = () => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // isModalOpen prevents the sign in modal being removed from the dom before the
    // sign-in modal is closed by the user
    const isModalOpen = () => {
        if (!auth) {
            return !auth;
        }
        else if (show === true && auth) {
            return true;
        }
    };
    return (
        <>


            <Navbar className='Navbar sticky-top' expand="lg" variant='dark'>
                <Navbar.Brand className="navTitle" href = '/'>AlienGram</Navbar.Brand>

                <Navbar.Toggle aria-controls = 'basic-navbar-nav'/>
                <Navbar.Collapse id = 'basic-navbar-nav'>
                    <Nav className = 'ml-auto'>
                        <Nav.Link className = 'navLink' href = '/'>Home</Nav.Link>
                        <Nav.Link className = 'navLink' href = '/map'>Map</Nav.Link>
                        {auth ? (
                            <>
                                <NavDropdown title = {auth?.profileUsername ?? ''} id = 'basic-nav-dropdown'>
                                    <NavDropdown.Item href = '/MyProfile'>My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href = '/MyPosts'>My Posts</NavDropdown.Item>
                                    <NavDropdown.Item href = '/MyTransmissions'>My Transmissions</NavDropdown.Item>
                                    <NavDropdown.Item href = '/MyLikes'>My Likes</NavDropdown.Item>
                                </NavDropdown>
                                <SignOut />
                            </>
                        ) : (
                            isModalOpen() && (
                                <>
                                <SignUpModal />
                                <SignInModal show = {show} handleClose = {handleClose} handleShow = {handleShow} />
                            </>
                            ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};


