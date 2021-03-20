import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RideContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(RideContext);
    console.log(loggedInUser);
    return (
        <div>
            <Navbar variant="light" className="nav">
                <Navbar.Brand as={Link} to="/">Wild Travel</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                    {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                    <Button as={Link} to="/login" className="ml-5" variant="dark"> {loggedInUser? 'Log in' : 'name'} </Button>
                </Nav>                           
            </Navbar>
        </div>
    );
};

export default Header;