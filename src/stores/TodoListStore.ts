import { observable, computed, action } from "mobx";
import uuid from "uuid/v4";
import { TodoStore } from "./TodoStore";

export enum Filters {
  ALL,
  ACTIVE,
  COMPLETED
}

export class TodoListStore {
  @observable todoList: TodoStore[];
  @observable currentFilter: Filters;

  constructor() {
    this.todoList = [];
    this.todoList.push(new TodoStore("halllo", uuid()));
    this.currentFilter = Filters.ALL;
  }

  @computed get getTodoList() {
    switch (this.currentFilter) {
      case Filters.ALL:
        return this.todoList;
      case Filters.ACTIVE:
        return this.todoList.filter(todo => !todo.isCompleted);
      case Filters.COMPLETED:
        return this.todoList.filter(todo => todo.isCompleted);
      default:
        return this.todoList;
    }
  }

  @computed get getRemainingTodos() {
    return this.todoList.filter(todo => !todo.isCompleted).length;
  }

  @computed get getCompletedTodos() {
    return this.todoList.filter(todo => todo.isCompleted).length;
  }

  @computed get getRemainingTodosString() {
    const remainingTodos = this.getRemainingTodos;
    if (remainingTodos === 0) {
      return "No remaining items";
    } else if (remainingTodos === 1) {
      return `${remainingTodos} item remaining`;
    } else {
      return `${remainingTodos} items remaining`;
    }
  }

  @computed get getCanClearCompleted() {
    return Boolean(this.getCompletedTodos);
  }

  @action addTodo = (taskName: string) => {
    this.todoList.push(new TodoStore(taskName, uuid()));
  };

  @action onClearCompleted = () => {
    this.todoList = this.todoList.filter(todo => !todo.isCompleted);
  };

  @action removeItem = (id: string) => {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  };

  @action toggleAll = (state: boolean) => {
    this.todoList = this.todoList.map(todo => {
      todo.isCompleted = state;
      return todo;
    });
  };

  @action setFilter = (filter: Filters) => {
    this.currentFilter = filter;
  };
}
