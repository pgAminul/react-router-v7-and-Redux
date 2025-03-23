import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, removeTodo } from "./TodoStore";
import { v4 as uuidv4 } from "uuid";
export default function Todos() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      AddTodo({
        id: uuidv4(),
        userInput: input,
      })
    );
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Add a todo"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
          }}
          type="submit"
        >
          Add Todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.userInput}
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "red",
                  color: "white",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => handleRemove(todo.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
