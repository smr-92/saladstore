import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/ingredients')
    }
    return (
        <Container className="home-ctnr">
            <br />
            <Row>
                <Col>
                    <h4>Welcome to salad store</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Order your own customized salad</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={handleClick}>Order Salad</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;