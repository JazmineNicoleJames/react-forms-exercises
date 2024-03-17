import React, {useEffect, useState} from "react";


const NewTodoForm = ({addTodo, editTodo, updateTodo}) => {

    const initialState = {
        id:"",
        todo:""
    };
    const [formData, setFormData] = useState(initialState);
    console.log('formData', formData)
    useEffect(() => {
        if(editTodo !== null && editTodo !== undefined){
            console.log('editTodo', editTodo)
            setFormData({...editTodo, todo: editTodo.todo || ""})
        } else {
            setFormData(initialState)
        }
    }, [editTodo])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(editTodo !== null){
            updateTodo(formData)
    
        } else {
            addTodo(formData)
            setFormData(initialState)
        }
        setFormData(initialState)
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };

    return (
        <form data-testid="new-todo-form" className="NewTodoForm">
            <label htmlFor="todo">Todo:</label>
            <input type="text" 
                    id="todo"
                    placeholder="todo" 
                    name="todo"
                    value={formData.todo}
                    onChange={handleChange} />
            <button onClick={handleSubmit}>{editTodo ? "Update todo" : "Add todo"}</button>
        </form>
    );
};

export default NewTodoForm;