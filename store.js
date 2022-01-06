import redux, { createStore } from 'redux'
import reduxLogger from 'redux-logger'
import {
    ADD_COUNTER,
    ADD_CALL_COUNTER
} from './constants/actions.js'

const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//actions
const addCounter = () => {
    return {
        type: ADD_COUNTER
    }
}

const addCallCount = () => {
    return {
        type: ADD_CALL_COUNTER
    }
}
//reducers
const counterState = {
    count: 0
}
const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }
}

const callCounterState = {
    callCount: 0
}

const callCounterReducer = (state = callCounterState, action) => {
    switch (action.type) {
        case ADD_CALL_COUNTER:
            return {
                ...state,
                callCount: state.callCount + 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    callCount: callCounterReducer,
})

//store
const store = createStore(rootReducer, applyMiddleware(logger));

//subscribe
// store.subscribe(() => {
//     console.log('subscribe ->', store.getState())
// })
store.dispatch(addCounter())
store.dispatch(addCounter())
store.dispatch(addCounter())
store.dispatch(addCounter())
store.dispatch(addCallCount())