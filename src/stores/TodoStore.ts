import { observable, action } from "mobx";

export class TodoStore {
  taskName: string;
  id: string;
  @observable isCompleted: boolean;
  @observable isEditing: boolean;
  @observable newTaskName: string;

  constructor(taskName: string, id: string) {
    this.taskName = taskName;
    this.id = id;
    this.isCompleted = false;
    this.isEditing = false;
    this.newTaskName = "";
  }

  getTaskName() {
    return this.taskName;
  }

  getIsCompleted() {
    return this.isCompleted;
  }

  @action toggleIsCompleted = () => {
    this.isCompleted = !this.isCompleted;
  };
}
