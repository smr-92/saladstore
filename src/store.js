import { createStore, applyMiddleware } from 'redux';
import {reducers} from './reducers';
import thunk from 'redux-thunk';
const initialState = {};

//Define redux store
const store = createStore(
	reducers,
	initialState, 
	applyMiddleware(thunk))
export default store;