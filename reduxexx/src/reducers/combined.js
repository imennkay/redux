import CounterReducer from "./counter";
import LoggedReducer from "./login";
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    
    CounterReducer,
    LoggedReducer
})

export default allReducers;