import React, { useEffect } from 'react';
import Ingredient from './Ingredient';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllIngredient, addIngredient } from '../actions';

//this is the parent component for listing all ingredients

const Ingredients = (props) => {
    useEffect(()=>{props.getAllIngredient()});

    const history = useHistory();

    const handleProceed = () =>{
        history.push('/orderdetails')
    }
    return (
        <Container>
            <ul className="ingredients-list">
                {props.ingredientList.map((ingredient, indx) => {
                    return (
                        <Ingredient ingredient={ingredient} key={ingredient.name}/>
                    )
                })}
            </ul>
            <Button className="proceed-btn" onClick={handleProceed}>PROCEED TO CHECKOUT</Button>
        </Container>
    )
}

const mapStateToProps = state => ({
    ingredientList: state.ingredientData.ingredientList
})
export default connect(mapStateToProps, { addIngredient, getAllIngredient }) (Ingredients);