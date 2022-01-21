import React, { useState, useEffect } from 'react';
import './styles/todo.scss';

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    useEffect(() => {
        const tempTodos = localStorage.getItem('todos');
        const loadedTodos = JSON.parse(tempTodos)

        if(loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [])

    useEffect(() => {
        const tempTodos = JSON.stringify(todos);
        localStorage.setItem('todos', tempTodos);
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false
        }

        setTodos([...todos].concat(newTodo));
        setTodo('');
    }

    const deleteTodo = (id) => {
        const updatedTodos = [...todos].filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    return <div className='todo'>
            <h2>TODAY'S TASKS</h2>
                <form onSubmit={handleSubmit} className='todo__form'>
                    <input type="text" onChange={(e) => {setTodo(e.target.value)}} value={todo} required />
                    <button type='submit' className='todo__form__btn'>Add</button>
                </form>

                <ul className='todo__list'>
                    {todos.map((todo) => {
                        return(
                            <li key={todo.id}>
                                <p className='todo__list__text'>{todo.text}</p>
                                <button onClick={() => deleteTodo(todo.id)}><i className="fas fa-trash-alt"></i></button>
                            </li>
                        )
                    })}
                </ul>
            </div>;
};

export default Todo;
