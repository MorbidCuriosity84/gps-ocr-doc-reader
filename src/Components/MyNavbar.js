import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import {Button, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar(props)  {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">OCR Document Reader</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="" onClick={
                        () => props.changeState( {
                            data: 'You are home',
                            upload: true} )}
                    >Home</Nav.Link>
                    <Nav.Link href="" onClick={
                        () => props.changeState( {
                            data: 'Now you are uploading a document',
                            upload: true}
                        )}
                    >Upload Document</Nav.Link>
                    <Nav.Link herf="" onClick={
                        () => props.changeState({
                            data: 'Now you are viewing the database',
                            upload: false} )}
                    >View Database</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default MyNavbar;