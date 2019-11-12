import React from "react";
import { observer } from "mobx-react";
import { TodoStore } from "../stores/TodoStore";
import { Todo } from "./Todo";

interface ITodoList {
  todos: TodoStore[];
  removeItem(id: string): void;
  toggleAll(id: boolean): void;
}

export const TodoList = observer(
  ({ todos, removeItem, toggleAll }: ITodoList) => (
    <>
      <input
        type="checkbox"
        className="toggle-all"
        id="toggle-all"
        onChange={e => toggleAll(e.target.checked)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo: TodoStore, i) => (
          <Todo
            key={todo.taskName}
            taskName={todo.taskName}
            isCompleted={todo.isCompleted}
            toggleIsCompleted={todo.toggleIsCompleted}
            removeItem={removeItem}
            id={todo.id}
          />
        ))}
      </ul>
    </>
  )
);
