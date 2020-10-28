export const addTodoAction = todo => ({
    type: "ADD_TODO",
    payload: todo
})
export const deleteTodoAction = todoId => ({
    type: "DELETE_TODO",
    payload: todoId
})
export const toggleTodoAction = todoId => ({
    type: "TOGGLE_TODO",
    payload: todoId
})
// state 변수 => json 다른놈으로 넘겨지는 것 
// 상태를 전달하려고 할 때 상태는 json 이어야함
// state 는 json json방식으로 받는 것 get, post = restpul=> 레스트 컨트롤러임
// 리스트로 던지면 배열로 받음 뷰에서는 for each로 받음
// json 으로 할당 
// json 으로 return 받음
// todos  투두리스트를 뿌려줌
const initalState = {todos: []}
const todoReducer = (state = initalState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {...state, todos: [...state.todos, action.payload] }
        case "TOGGLE_TODO":
            return {...state, todos: 
                state.todos.map(todo => todo.todoId === action.payload ?
                    {...todo, complete: !todo.complete} : todo)
                    
            }
        case "DELETE_TODO":
            return {...state, todo: state.todos.filter(todo => todo.todoId !== action.payload)}
        default:
            return state   
    }

}

export default todoReducer