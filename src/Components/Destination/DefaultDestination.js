import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DefaultDestination.css'

const DefaultDestination = () => {
    return (
        <div className="center">
        <div className="text mt-5 p-5">
           <h3>Choose and Select our World class ride.</h3>
           <h5>Explore the world with us!</h5>
           <Button as={Link} to="/" className="mt-3">See More</Button>
        </div>
        </div>
    );
};

export default DefaultDestination;