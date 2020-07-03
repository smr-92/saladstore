import {
    GETALLINGREDIENTS, ADD_INGREDIENT, ADD_QUANTITY, SUBTRACT_QUANTTY, DELETE_INGREDIENT,
    PLACE_ORDER, CLOSE_MODAL
} from '../constants/ActionTypes';
import { combineReducers } from 'redux';


/**
 * set up with initial state.
 */
const initialState = {
    ingredientList: [],
    addedIngredientList: {}
}

//...................................................................

/**
 * reducer .
 * @constructor
 * @param {string} state - state of the data shape.
 * @param {string} action - action payload passed for data updates.
 */
export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLINGREDIENTS: {
            return {
                ...state,
                ingredientList: action.payload
            }
        }
        case ADD_INGREDIENT: {
            const { name, price } = action.payload
            return {
                ...state,
                addedIngredientList: {
                    ...state.addedIngredientList,
                    [name]: {
                        price,
                        quantity: 1
                    }
                }
            }
        }
        case ADD_QUANTITY: {
            const { name } = action.payload
            return {
                ...state,
                addedIngredientList: {
                    ...state.addedIngredientList,
                    [name]: {
                        ...state.addedIngredientList[name],
                        quantity: state.addedIngredientList[name].quantity + 1
                    }
                }
            }
        }
        case SUBTRACT_QUANTTY: {
            const { name } = action.payload
            return {
                ...state,
                addedIngredientList: {
                    ...state.addedIngredientList,
                    [name]: {
                        ...state.addedIngredientList[name],
                        quantity: state.addedIngredientList[name].quantity - 1
                    }
                }
            }
        }
        case DELETE_INGREDIENT: {
            const { name } = action.payload
            const { [name]: value, ...withoutVale } = state.addedIngredientList;
            return {
                ...state,
                addedIngredientList: withoutVale
            }
        }
        case CLOSE_MODAL: {
            return initialState
        }
        default: return state;
    }
}
//.................................................................................................
/**
 * set up with initial state.
 */
const initialOrderState = {
    orderDetails: {},
    orderModal: false
}

//...................................................................

/**
 * reducer .
 * @constructor
 * @param {string} state - state of the data shape.
 * @param {string} action - action payload passed for data updates.
 */
export const orderReducer = (state = initialOrderState, action) => {
    switch (action.type) {
        case PLACE_ORDER: {
            return {
                ...state,
                orderDetails: action.payload,
                orderModal: true
            }
        }
        case CLOSE_MODAL: {
            return initialOrderState
        }
        default: return state;
    }
}

//.......................................................................
/**
 * combine multiple reducers into one.
 */
export const reducers = combineReducers({
    ingredientData: ingredientReducer,
    orderData: orderReducer
})