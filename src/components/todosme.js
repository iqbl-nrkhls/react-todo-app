import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const Todos = (props) => {

  console.log("props", props);

  const [todo, setTodo] = useState('');

  const add = () => {
    if (todo === '') {
      alert('input is empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={handleChange}
        className="todo-input"
        value={todo}
      />

      <button
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </button>
      <br/>

      {/*<ul>
        {props.todos.length > 0 && props.todos.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </ul>*/}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);