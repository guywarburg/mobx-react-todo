import React from "react";

const App: React.FC = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked />
              <label>test</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li className="">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>hallo</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
};

export default App;
