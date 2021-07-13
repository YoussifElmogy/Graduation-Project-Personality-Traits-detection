import React from "react";
import Todo from './Todo'

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, settodos, filterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          // eslint-disable-next-line react/prop-types
          filterTodos.map((todo) => (
            // eslint-disable-next-line react/jsx-key
            <Todo
              settodos={settodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            ></Todo>
          ))
        }
      </ul>
    </div>
  );
};
export default TodoList;
