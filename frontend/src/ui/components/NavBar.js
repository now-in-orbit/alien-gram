import React from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import '../Welcome.css'
export const  NavBar =  () => {
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}
