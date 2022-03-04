import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, incompleteTodo } from '../redux/reducer';

const Check = (props) => {
  const dispatch= useDispatch();

  const handleClick = () => {
    if (props.completed) {
      dispatch(incompleteTodo(props.id));
    } else { 
      dispatch(completeTodo(props.id));
    }
  }

  return (
    <div className={'shrink-0 rounded-full w-[20px] h-[20px] md:w-[25px] md:h-[25px] p-px ml-1 md:ml-2 mr-2 md:mr-6 '+
      ((props.completed)
      ? 'bg-gradient-to-br from-[#57ddff] to-[#c058f3]' : 'bg-light-1 dark:bg-light-3') +
      ' group-hover:bg-gradient-to-br from-[#57ddff] to-[#c058f3]'}>
      <button
        onClick={handleClick}
        className={'rounded-full w-full h-full flex justify-center items-center'+((props.completed)?'':' bg-white dark:bg-dark-1')}
        role="checkbox"
        aria-label="checkbox todo"
        aria-checked={props.completed} >
        {props.completed && (
          <img src="images/icon-check.svg" alt="icon check" />
        )}
      </button>
    </div>
  )
}


export default Check;