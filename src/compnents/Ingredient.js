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
        <Container style={{ width: "fit-conten", margin: "auto", justifyContent: "center", textAlign: "center", border: "solid grey", padding: "5px 0px" }}>
            <Row>
                <Col>
                    <h6>{props.ingredient.name}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{`Price : ₹ ${props.ingredient.price}`}</p>
                </Col>
                <Col>
                    <p>{`Added Qnty: ${props.addedIngredientList[props.ingredient.name] ? props.addedIngredientList[props.ingredient.name].quantity : 0}`}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {!props.addedIngredientList[props.ingredient.name] ?
                        <Button variant="outline-success" size="sm" onClick={handleAdd}>ADD TO SALAD</Button> :
                        <CustomButton ingredient={props.ingredient} />}
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps = state => ({
    addedIngredientList: state.ingredientData.addedIngredientList
})
export default connect(mapStateToProps, { addIngredient, addQuantity })(Ingredient);