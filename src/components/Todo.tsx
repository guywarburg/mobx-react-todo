import React from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../stores/TodoStore";
import { TodoListStore } from "../stores/TodoListStore";

export const Todo = observer(
  ({
    taskName,
    isCompleted,
    toggleIsCompleted,
    removeItem,
    id
  }: Partial<TodoStore & TodoListStore>) => {
    return (
      <li className={isCompleted ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={isCompleted}
            onChange={toggleIsCompleted}
          />
          <label>{taskName}</label>
          <button
            className="destroy"
            onClick={() => removeItem && id && removeItem(id)}
          ></button>
        </div>
      </li>
    );
  }
);
