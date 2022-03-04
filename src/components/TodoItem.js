import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/reducer';

import { IoCheckmarkDoneSharp, IoClose } from 'react-icons/io5';
import Check from './Check';

const TodoItem = (props) => {
  const { item } = props;

  const dispatch = useDispatch();

  return (
    <div key={item.id}>
      <div className="group flex items-center leading-none border-b border-light-1 dark:border-light-3 p-4 md:mt-1 bg-white dark:bg-dark-1">
        <Check 
          id={item.id}
          completed={item.completed}
        />
        <p className={"mt-1 grow text-xs md:text-base "+(item.completed ? " line-through text-light-1 dark:text-light-2" : " text-dark dark:text-white")}>{item.title}</p>
        <button
          onClick={(e) => dispatch(removeTodo(item.id))}
          className="shrink-0 group-hover:opacity-100 md:opacity-0"
          aria-label="delete todo" >
          <img src="images/icon-cross.svg" className="p-1 h-[20px]" alt="icon delete" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem;