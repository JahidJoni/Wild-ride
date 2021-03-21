import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Destination.css'
import fakeData from '../../fakedata.json'
import { getCurrentDate } from './Date'
import { Map } from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Destination = () => {
    const { register, handleSubmit, errors } = useForm();
    const [search, setSearch] = useState([])

    const { id } = useParams();
    const myRide = fakeData.find(ride => ride.id == id)
    const { image, type, capacity, cost } = myRide
    const onSubmit = data => {
        setSearch(data)
    };


    return (
        <Container className="mt-5" fluid>
            <Row>
                <Col className="p-3 form w-75">
                    <div className="results p-3">
                        <h5>&#9872; {search.pickTo}</h5>
                        <h5>&#9873; {search.pickFrom}</h5>
                        <div className="d-flex mt-4">
                            <h6>{type}</h6>
                            <h6 className="mx-4"><FontAwesomeIcon icon={faUser} /> {capacity}</h6>
                            <h6><FontAwesomeIcon icon={faDollarSign} />{cost}</h6>
                        </div>
                        <img src={image} alt="" className="car-img" />
                        <p>Travel Date: {getCurrentDate()}</p>
                    </div>
                    <form className="destination-form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Label className="d-block mt-2">Pick From</Form.Label>
                        <input name="pickFrom" defaultValue="Uttara" ref={register} className="form-input" />
                        <Form.Label className="d-block mt-2">Pick From</Form.Label>
                        <input name="pickTo" ref={register({ required: true })} className="form-input" />
                        {errors.pickTo && <span className="error">This field is required</span>}
                        <input type="submit" className="form-input m-2 d-block" />
                    </form>
                </Col>
                <Col className="m-2 justify-content-sm-center">
                    <Map> </Map>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;