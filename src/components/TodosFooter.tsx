import React from "react";
import { observer } from "mobx-react";
import { Filters } from "../stores/TodoListStore";

interface ITodosFooterProps {
  remainingTodosString: string;
  canClearCompleted: boolean;
  onClearCompleted(): void;
  setFilter(filter: Filters): void;
  currentFilter: Filters;
}

export const TodosFooter = observer(
  ({
    remainingTodosString,
    canClearCompleted,
    onClearCompleted,
    setFilter,
    currentFilter
  }: ITodosFooterProps) => {
    console.log("canClearCompleted:", canClearCompleted);
    return (
      <>
        <span className="todo-count">{remainingTodosString}</span>
        <ul className="filters">
          <li onClick={() => setFilter(Filters.ALL)}>
            <a className={currentFilter === Filters.ALL ? "selected" : ""}>
              All
            </a>
          </li>
          <li onClick={() => setFilter(Filters.ACTIVE)}>
            <a className={currentFilter === Filters.ACTIVE ? "selected" : ""}>
              Active
            </a>
          </li>
          <li onClick={() => setFilter(Filters.COMPLETED)}>
            <a
              className={currentFilter === Filters.COMPLETED ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>
        {canClearCompleted && (
          <button className="clear-completed" onClick={onClearCompleted}>
            Clear Completed
          </button>
        )}
      </>
    );
  }
);
