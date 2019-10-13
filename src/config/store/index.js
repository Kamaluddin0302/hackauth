import {createStore} from 'redux'

import reducer from './reducer'

let Store = createStore(reducer)


export default Store