import React from 'react';
import hlogo from './logov2.png'; // gives image path
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header">
                <Navbar bg="warning" expand="lg">
                    <div className="container">
                        <Navbar.Brand href="#home"><img src={hlogo} alt="Logo Image" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#link"><h1>New Topic</h1></Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;