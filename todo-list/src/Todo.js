import React from "react";

const Todo = ({id, todo, remove, clickEditTodo}) => {

    return (
        <div className="todo" id={id} data-testid="todo-component">{todo}
            <button className="editBtn" onClick={() => clickEditTodo(id)}> edit </button>            
            <button className="btn" onClick={() => remove(id)}> X </button>
        </div>
    )
}


export default Todo;