import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import CustomButton from './CustomButton';
import { addIngredient, addQuantity } from '../actions';
import { connect } from 'react-redux';


// this is the child component for render a single ingredient

const Ingredient = (props) => {

    const handleAdd = () => {
        props.addIngredient(props.ingredient)
    }

    return (
       
        <Col className="col-md-3 ingrdnt-col">
            <Row>
                <Col>
                    <h6>{props.ingredient.name}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{`Price : ₹ ${props.ingredient.price}`}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {!props.addedIngredientList[props.ingredient.name] ?
                        <Button variant="outline-success" size="sm" onClick={handleAdd}>ADD TO SALAD</Button> :
                        <CustomButton ingredient={props.ingredient} />}
                </Col>
            </Row>
        </Col>
    )
}
const mapStateToProps = state => ({
    addedIngredientList: state.ingredientData.addedIngredientList
})
export default connect(mapStateToProps, { addIngredient, addQuantity })(Ingredient);