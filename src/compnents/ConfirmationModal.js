import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Container } from 'react-bootstrap';
import OrderDetails from './OderDetails';


const ConfirmationModal = (props) => {
    const handleClose = () => {
        props.handleCloseModal()
    }
    console.log(props);
    return (
        <Modal
            show={props.orderModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{`Thank you for shopping with us`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Container>
                   <p>Your order details</p>
                    <OrderDetails/>
               </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
}
const mapStateToProps = state => ({
    orderModal:state.orderData.orderModal,
    orderDetails:state.orderData.orderDetails
})
export default connect(mapStateToProps)(ConfirmationModal);