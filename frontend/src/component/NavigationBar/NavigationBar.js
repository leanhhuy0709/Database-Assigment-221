import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';




function NavigationBar({user}) {
    function handleLogout()
    {
        localStorage.removeItem("token");
        localStorage.removeItem("route");
    }

    if(true)
        return (
    <>
        <Navbar fixed="top"  bg="light" expand="lg" className= 'border-bottom border-2 text-dark' style = {{height: '68px'}}>
            <Container fluid>
                <Navbar.Brand href="/">BKU Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <NavDropdown title="More" id="navbarMore">
                    <NavDropdown.Item href="/user">User Info</NavDropdown.Item>
                    <NavDropdown.Item href="/userlist">
                    User List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/login" onClick = {handleLogout}>
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Navbar.Text className = 'p-3 text-dark'>
                        {user.FName + ' ' + user.MName + ' ' + user.LName}
                    </Navbar.Text>
                    <Nav.Link href="/cart" className = 'p-3 text-dark'>Cart <i className = 'bi-cart'></i></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div style = {{width: '100%', height: '68px'}}></div>
    </>
        );
    else 
        return (<div/>)
}

export default NavigationBar;

