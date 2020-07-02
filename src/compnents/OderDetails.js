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
            <ul style={{padding:"15px"}}>
                {Object.keys(cartItems).map((item) => {
                    return (
                        <div key={item} style={{padding: "0 15px"}}>
                            <Row>
                                <h6>{item}</h6>
                            </Row>
                            <Row>
                                <Col style={{padding:"0px"}}>
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
            <h4 className="total-ammount">{`Total Order Amount: ${getTotalAmmont()}`}</h4>
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    addedIngredientList: state.ingredientData.addedIngredientList
})
export default connect(mapStateToProps)(OderDetails);