import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from './Profile';
import About from './About';
import Home from './Home';


const HeaderNavigation =()=> {
    return(        
        <Navbar bg="light" expand="lg" className="shadow-lg mb-2">
            <Navbar.Brand href="#home">Dodi Rustandi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="./Home">Home</Link>                      
                    <Link className="nav-link" to="./About">About</Link>
                    <Link className="nav-link" to="./Profile">profile</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderNavigation;