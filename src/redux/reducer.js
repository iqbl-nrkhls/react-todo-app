import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '1', title:'Complete online Javascript course', completed: true},
  {id: '2', title:'Jog around the park 3x', completed: false},
  {id: '3', title:'10 minutes mediation', completed: false},
  {id: '4', title:'Read for 1 hour', completed: false},
  {id: '5', title:'Pick up groceries', completed: false},
  {id: '6', title:'Complete Todo App on Frondend Mentor', completed: false},
];

const addTodoReducer = createSlice({
  name: "todos",

  initialState,

  reducers: {
    //here we will write our rteducer
    //Adding todo
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },

    //remove todo
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    //clear all complete todos
    clearCompleteTodos: (state) => {
      console.log('ok');
      return state.filter((item) => item.completed !== true);
    },

    //completed
    completeTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      })
    },

    incompleteTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: false,
          };
        }
        return todo;
      })
    },

    reorderTodos: (state, action) => {
      return action.payload;
    }
  },
});

export const {
  addTodo,
  removeTodo,
  clearCompleteTodos,
  completeTodo,
  incompleteTodo,
  reorderTodos,
} = addTodoReducer.actions;
export default addTodoReducer.reducer;