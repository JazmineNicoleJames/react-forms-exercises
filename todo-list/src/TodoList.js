import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo"


const TodoList = () => {

    const [todo, setTodo] = useState([])
    const [editTodo, setEditTodo] = useState(null)
    
    const remove = (id) => {
        setTodo(((prevTodo) => prevTodo.filter(todo => todo.id !==id)))
    }

    const addTodo = (todo) => {
        const id = uuid()
        let newTodo = {
            ...todo,
            id
        }
        setTodo((prevTodo) => [...prevTodo, newTodo]);
        setEditTodo(null)
    };

    const clickEditTodo = (id) => {
        const todoEdit = todo.find((todo) => todo.id === id)
        setEditTodo({...todoEdit, todo: todoEdit.todo})
    };

    const updateTodo = (updatedTodo) => {
        setTodo((prevTodo) => {
            return prevTodo.map((todo) => {
                if(todo.id === updatedTodo.id) {
                    setEditTodo(null)
                    return updatedTodo
                } else {
                    return todo;
                }

            });

        })
    }

    return (
        <div>
            <NewTodoForm 
                addTodo={addTodo} 
                className="NewTodoForm" 
                remove={remove} 
                editTodo={editTodo} 
                updateTodo={updateTodo} />
            <div className="TodoList">
                {todo.map(({id, todo}) =>
                    <Todo id={id} 
                        todo={todo}
                        remove={remove}
                        clickEditTodo={clickEditTodo}
                    />)}
            </div>
        </div>
    )
}

export default TodoList;