import { getIngredients } from '../mockApi';
import {
    GETALLINGREDIENTS, ADD_INGREDIENT, ADD_QUANTITY, SUBTRACT_QUANTTY, DELETE_INGREDIENT,
    PLACE_ORDER, CLOSE_MODAL
} from '../constants/ActionTypes';



/**
 * all actions are defined here
 * @constructor
 * @param {string} param Pass param to update the payload
**/
export const getAllIngredient = () => {
    console.log("getcall")
    return (dispatch) => {
        const ingredients = getIngredients().ingredients
        dispatch({
            type: GETALLINGREDIENTS,
            payload: ingredients
        })

    }
}

export const addIngredient = (param) => ({
    type: ADD_INGREDIENT,
    payload: param
})

export const subtractQuantity = (param) => ({
    type: SUBTRACT_QUANTTY,
    payload: param
})

export const addQuantity = (param) => ({
    type: ADD_QUANTITY,
    payload: param
})

export const deleteIngredient = (param) => ({
    type: DELETE_INGREDIENT,
    payload: param
})

export const placeOrder = (param) => ({
    type: PLACE_ORDER,
    payload: param
})


export const closeModal = () => ({
    type: CLOSE_MODAL
})