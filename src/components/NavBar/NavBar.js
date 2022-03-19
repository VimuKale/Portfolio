import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavBar.css";
function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" id="navbar-brand">vimu<span className="dot">.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-links'>
                            <Nav.Link href="#home" className='link'>home<span className="dot"> |</span></Nav.Link>
                            <Nav.Link href="#about" className='link'>about<span className="dot"> |</span></Nav.Link>
                            <Nav.Link href="#projects" className='link'>projects<span className="dot"> |</span></Nav.Link>
                            <Nav.Link href="#skills" className='link'>skills<span className="dot"> |</span></Nav.Link>
                            <Nav.Link href="#contact" className='link'>contact<span className="dot"> |</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar