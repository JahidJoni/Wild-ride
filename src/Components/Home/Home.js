import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = (props) => {
    const vehicles = props.vehicle
    return (
        <Container fluid className="main-area">
            <Row className="justify-content-center cars-area">
            {
                vehicles.map(vehicles =>
                    <Card style={{ width: '18rem' }} className='d-flex m-2 cards' as={Link} to={`/destination/${vehicles.id}`}>
                        <Card.Img variant="top" src={vehicles.image} cars/>
                        <Card.Body>
                            <Card.Title className="car-name">{vehicles.type}</Card.Title>
                        </Card.Body>
                    </Card>)
            }
            </Row>
        </Container>
    );
};

export default Home;