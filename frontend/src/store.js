import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { jobListReducer } from './reducers/jobReducers'
import { jobExpandedReducer } from './reducers/jobReducers'

const reducer = combineReducers({
    jobList: jobListReducer,
    jobExpanded: jobExpandedReducer,
})

const initialState = {}

const middlware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middlware)))

export default store