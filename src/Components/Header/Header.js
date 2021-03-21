import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RideContext } from '../../App';
import './Header.css'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [loggedInUser] = useContext(RideContext);
    const [user] = useContext(RideContext);
    const [newUser] = useContext(RideContext);

    return (
        <div>
            <Navbar className="nav">
                <Navbar.Brand as={Link} to="/" className="brandName">Wild Travel</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                    <Nav.Link className="userName"> <FontAwesomeIcon icon={faIdCard}/>  {loggedInUser.name || user.email }</Nav.Link>
                    <Button as={Link} to="/login" variant="dark"> Account </Button>
                </Nav>                           
            </Navbar>
        </div>
    );
};

export default Header;