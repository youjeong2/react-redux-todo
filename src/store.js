import {createStore} from 'redux'
import toDoReducer from './toDoReducer'

const Store = createStore(toDoReducer)

export default store