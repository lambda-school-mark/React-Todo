import React from "react";

const Todo = (props) => {
  return (
    <div
      className="itemDiv"
      onClick={() => props.toggleTodo(props.todo.id)}
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p className="items">{props.todo.task}</p>
    </div>
  );
};

export default Todo;
