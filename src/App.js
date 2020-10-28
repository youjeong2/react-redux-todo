import React from 'react';
import { Provider } from 'react-redux'
import TodoInput from './todos/TodoInput'
import TodoList from './todos/TodoList'
import store from './todos/store'

function App() {
  return <>
    <Provider store =  {store}>
    <TodoInput/><br/><TodoList/>
    </Provider>
</>
}

export default App;
