import React from "react";
import { TodoListStore } from "./stores/TodoListStore";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodosFooter } from "./components/TodosFooter";
import { observer } from "mobx-react";

const store = new TodoListStore();
const App: React.FC = observer(() => {
  const todos = store.getTodoList;
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo createTodo={store.addTodo} />
      </header>
      <section className="main">
        <TodoList
          todos={todos}
          removeItem={store.removeItem}
          toggleAll={store.toggleAll}
        />
      </section>
      <footer className="footer">
        <TodosFooter
          remainingTodosString={store.getRemainingTodosString}
          canClearCompleted={store.getCanClearCompleted}
          onClearCompleted={store.onClearCompleted}
          setFilter={store.setFilter}
          currentFilter={store.currentFilter}
        />
      </footer>
    </section>
  );
});

export default App;
