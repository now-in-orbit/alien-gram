import React from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import '../Welcome.css'
export const  NavBar =  () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Navbar.Brand href="#home">AlienGram</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='navlink' href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Map</Nav.Link>
                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.3">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Posts</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Transmissions</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Likes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}