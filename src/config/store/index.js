import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
let Store = createStore(reducer,applyMiddleware(thunk))
export default Store