import React from 'react';
import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import OrderDetails from './OderDetails';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ConfirmationModal from './ConfirmationModal';
import { placeOrder } from '../actions';
import { closeModal } from '../actions';

const Cart = (props) => {
    const cartItems = props.addedIngredientList;
    const history = useHistory();
    const handleCloseModal = () => {
        props.closeModal();
        history.push('/');
    }
    const handleBack = () => {
        history.push('/ingredients')
    };
    const confirmOrder = (customerData) => {
        let orderData = {
            ...customerData,
            cartItems
        }
        props.placeOrder(orderData)
        console.log(orderData)
    };
    return (
        <React.Fragment>
            <Container>
                <h3 className="odr-smry">Order Summery</h3>
                {Object.keys(cartItems).length > 0 ?
                    <Row>
                        <Col md={6} className="odrDtls-wrapper">
                            <OrderDetails />
                        </Col>
                        <Col md={6}>
                            <OrderForm confirmOrder={confirmOrder} />
                        </Col>
                    </Row> :
                    <p>You didn't added any ingredients in your salad!</p>}
                    <Row className="bck-btn">
                <Button onClick={handleBack}>Back To Ingredients</Button>
                </Row>
            </Container>
            <ConfirmationModal handleCloseModal={handleCloseModal} />
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    addedIngredientList: state.ingredientData.addedIngredientList
})
export default connect(mapStateToProps, { placeOrder, closeModal })(Cart);