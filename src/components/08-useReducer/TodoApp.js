import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './TodoApp.css';
import { useEffect } from 'react/cjs/react.development';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
  }  

  return (
    <div>
      { console.log('return') }     
      <h1>TodoApp({ todos.length })</h1>
      <hr/>

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos} 
            handleToggle={handleToggle} 
            handleDelete={handleDelete} 
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>

    </div>
  )
}
