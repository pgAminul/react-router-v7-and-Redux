import { createStore } from "redux";

// initial state
const initialState = {
  todos: [],
};

//  create Action
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const AddTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

//  create Reducer

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

//  create store
const todosStore = createStore(todoReducer);

export { todosStore, AddTodo, removeTodo };
