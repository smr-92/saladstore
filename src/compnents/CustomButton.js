import React from "react";
import { connect } from "react-redux";
import { deleteIngredient, subtractQuantity, addQuantity } from '../actions';

const CustomButton = props => {
  
  const findProductQnty = () => {
    let cart = props.addedIngredientList
    let quantity = 0;
    const { name } = props.ingredient;
    if(cart[name]){
        quantity = cart[name].quantity
    }
    return quantity;
  }

  let quantity= findProductQnty() 

  const handleMinus = () => {
      if(quantity > 1 ) {
          props.subtractQuantity(props.ingredient)
      }
      else {
          props.deleteIngredient(props.ingredient)
      }
  }
  const handlePlus = () => {
      props.addQuantity(props.ingredient)
  }
    return (
      <div className={"stepperc-input"} style={{display: quantity > 0 ? "flex" : "none"}}>
        <button className="decrement" onClick={handleMinus}>
          -
        </button>
        <input
          type="number"
          className="quantity"
          readOnly={true}
          value={quantity}
        />
        <button className="increment" onClick={handlePlus}>
          +
        </button>
      </div>
    );
  }

const mapStateToProps = state => ({
    addedIngredientList: state.ingredientData.addedIngredientList
});


export default connect(mapStateToProps,{ deleteIngredient, subtractQuantity, addQuantity }) (CustomButton);
