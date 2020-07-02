import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
const OderDetails = (props) => {
    const cartItems = props.addedIngredientList
    const getTotalAmmont = () => {
        let total = 0;
        for (let i in cartItems) {
            total += cartItems[i].price * cartItems[i].quantity
        }
        return total
    }
    return (
        <React.Fragment>
            <ul style={{ width: "80%" }}>
                {Object.keys(cartItems).map((item) => {
                    return (
                        <div key={item}>
                            <Row>
                                <h6>{item}</h6>
                            </Row>
                            <Row>
                                <Col>
                                    <p>{`Qnty: ${cartItems[item].quantity}`}</p>
                                </Col>
                                <Col>
                                    <p>{`price: ${cartItems[item].price}`}</p>
                                </Col>
                                <Col>
                                    <p>{`total price: ${cartItems[item].quantity * cartItems[item].price}`}</p>
                                </Col>
                            </Row>
                        </div>
                    )
                })}
            </ul>
            <p>--------------------------------------------------</p>
            <h4>{`Total Order Amount: ${getTotalAmmont()}`}</h4>
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    addedIngredientList: state.ingredientData.addedIngredientList
})
export default connect(mapStateToProps)(OderDetails);