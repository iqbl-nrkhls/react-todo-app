import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleteTodos, reorderTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import FilterTodo from './FilterTodo';

import { Reorder } from "framer-motion/dist/framer-motion";

console.log(Reorder);

const DisplayTodos = (props) => {
  const [filter, setFilter] = useState('all');
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const countingLeft = () => {
    let count = 0;
    todos.forEach((item) => {
      if(!item.completed) count += 1;
    })
    return count;
  }
  const countLeft = countingLeft();

  const handleReorder = (e) => {
    dispatch(reorderTodos(e));
  }

  return (
    <>
      <div className="rounded-md overflow-hidden mb-5 bg-white dark:bg-dark-1 drop-shadow-2xl">
        <Reorder.Group axis="y" onReorder={handleReorder} values={todos}>
          {todos.length > 0 && filter === 'active'
            ? todos.map((item) => {
              return (
                item.completed === false && (
                  <Reorder.Item key={item.id} value={item}>
                    <TodoItem
                      item={item}
                    />
                  </Reorder.Item>
                )
              )
          }):null}
          {/* for completed items */}
          {todos.length > 0 && filter === 'completed'
            ? todos.map((item) => {
              return (
                item.completed === true && (
                  <Reorder.Item key={item.id} value={item}>
                    <TodoItem
                      item={item}
                    />
                  </Reorder.Item>
                )
              )
          }):null}
          {/* for all items */}
          {todos.length > 0 && filter === "all"
            ? todos.map((item) => {
              return (
                <Reorder.Item key={item.id} value={item}>
                  <TodoItem
                    item={item}
                  />
                </Reorder.Item>
              );
          }):null}
        </Reorder.Group>
        <div className="text-xs md:text-base text-light-2 flex justify-between p-4">
          <p>
            {`${countLeft} item`+(countLeft > 1 ? 's' : '')+` left`}
          </p>
          <div className="hidden md:flex justify-center gap-4">
            <FilterTodo filter={filter} setFilter={setFilter} />
          </div>
          <button onClick={() => dispatch(clearCompleteTodos())} className="hover:text-white">
            Clear Completed
          </button>
        </div>
      </div>

      <div className="flex justify-center rounded-md gap-4 p-4 bg-white dark:bg-dark-1 drop-shadow-2xl md:hidden">
        <FilterTodo filter={filter} setFilter={setFilter} />
      </div>

      <p className="text-sm text-center text-light-2 mt-10">Drag and drop to reorder list</p>
    </>
  )
}

export default DisplayTodos;