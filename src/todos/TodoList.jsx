import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {toggleTodoAction, deleteTodoAction} from './store/todoReducer'

// redux에서 json안의 {todos} 이거는 배열 가져와야함 뿌리는 곳이니까
const TodoList = () =>  {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const toggleTodo = todoId => dispatch(toggleTodoAction(todoId))
    const deleteTodo = todoId => dispatch(deleteTodoAction(todoId))
    return <>
        <div>
            {todos && todos.length === 0 && (
                <p className="alert alert-info">No Todos at the moment</p>
            )}
            {todos &&
            todos.map(todo => (
                <div key={todo.id} className="row mb-1">
                    <div className="col-sm-2">
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={toggleTodo.bind(null, todo.todoId)}
                        />
                        <span style={{margin: '20px'}}>{todo.name}</span>

                        <button
                            className="btn btn-danger"
                            onClick={deleteTodo.bind(null, todo.todoId)}
                        >
                            X
                        </button>

                    </div>    
                </div>
            ))}
        </div>
    </>

}

export default TodoList