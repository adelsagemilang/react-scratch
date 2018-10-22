import { createStore, combineReducers, applyMiddleware } from 'redux'
import CountReducer from './reducers/CountReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    CountReducer
});


let store = createStore(reducer, applyMiddleware(thunk));

export default store;