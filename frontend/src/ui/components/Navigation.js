import React, {useState, useEffect} from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import './Navigation.css'
import {fetchAuth} from "../../store/auth"
import {SignInModal} from './main-nav/sign-in/SignInModal';
import {SignUpModal} from './main-nav/sign-up/SignUpModal';
import {useDispatch, useSelector} from 'react-redux';
export const  Navigation =  (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()
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
    const isModalOpen = ()=> {
        if(!auth) {
            return !auth
        } else if(show === true && auth  ) {
            return true
        }
    }

    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Navbar.Brand href="Home">AlienGram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='navlink' href="/">Home</Nav.Link>
                        <Nav.Link href="/map">Map</Nav.Link>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/Posts">Posts</NavDropdown.Item>
                            <NavDropdown.Item href="/Transmissions">Transmissions</NavDropdown.Item>
                            <NavDropdown.Item href="/Likes">Likes</NavDropdown.Item>
                        </NavDropdown>
                        {isModalOpen()  &&  (
                            <>
                                <SignUpModal/>
                                <SignInModal show={show} handleClose={handleClose} handleShow={handleShow}/>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}
