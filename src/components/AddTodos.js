import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from "../redux/reducer";

const AddTodos = (props) => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state)
  const dispatch = useDispatch();

  const add = () => {
    if (todo === '') {
      alert('input is empty');
    } else {
      dispatch(addTodo({
        id: Math.floor(Math.random() * 1000),
        title: todo,
        completed: false,
      }));
      setTodo('');
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.which === 13) add();
  }

  return (
    <div className="relative">
      <div className="absolute top-3.5 left-4 rounded-full w-[20px] h-[20px] md:w-[25px] md:h-[25px] md:mt-1 p-px ml-1 md:ml-2 bg-light-1 dark:bg-light-3">
        <div className={'rounded-full w-full h-full flex justify-center items-center bg-white dark:bg-dark-1'} />
      </div>
      <input
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        className="font-sans w-full text-xs rounded-md p-4 pl-[50px] dark:bg-dark-1 dark:text-white md:text-base md:p-5 md:pl-[75px]"
        value={todo}
        placeholder="Create a new todo.."
      />
    </div>
  );
}

export default AddTodos;