import { createStore, combineReducers, applyMiddleware } from 'redux';
import statisticReducer from './statistic-reducer';
import thunkMiddleware from 'redux-thunk';
const reducer = combineReducers({
    statisticReducer
}) 
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
