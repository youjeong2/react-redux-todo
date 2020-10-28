import React, { useState } from 'react'
import uuid from 'uuid'
import {useDispatch} from 'react-redux'
import {addTodoAction} from './store/todoReducer'


const TodoInput = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const submitForm = e => {
        e.preventDefault()
        const newTodo = {
            todoId: uuid(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")
    }
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
        alert(e.target.value)
    }
    const addTodo = todo => {
           dispatch(addTodoAction(todo))
    }

    return <>
        <form onSubmit={submitForm} method='POST'>
            <div className="row mt-3">
                <div className="form-group col-sm-8">
                    <input
                        type="text"
                        placeholder="Add a todo"
                        name="todo"
                        className="form-control"
                        onChange= {handleChange}
                    />
                </div>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary btn-md">
                        Add Todo
                    </button>
                </div>
            </div>
        </form>
    </>

}

export default TodoInput