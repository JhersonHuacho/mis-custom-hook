import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
import './TodoApp.css';
import { useEffect } from 'react/cjs/react.development';
import { TodoList } from './TodoList';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender React',
  //   done: false
  // }];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [formValue, handleInputChange, reset] = useForm({
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);

    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action);

  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: formValue.description,
      done: false
    }
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
    reset();
  }  

  return (
    <div>
      { console.log('return') }     
      <h1>TodoApp({ todos.length })</h1>
      <hr/>

      <div className="row">
        <div className="col-7">
          <TodoList
            todo={todos} 
            handleToggle={handleToggle} 
            handleDelete={handleDelete} 
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr/>

          <form onSubmit={ handleSubmit }>
            <input 
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
              value={formValue.description}
              onChange={handleInputChange}
            />
            <button 
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
