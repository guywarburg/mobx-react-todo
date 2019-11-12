import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

interface IAddTodoProps {
  createTodo(name: string): void;
}

@observer
export class AddTodo extends Component<IAddTodoProps, {}> {
  @observable inputValue = "";

  updateValue = (e: any) => {
    this.inputValue = e.target.value;
  };
  submitTodo = (e: any) => {
    if (e.key === "Enter") {
      this.props.createTodo(this.inputValue);
      this.inputValue = "";
    }
  };
  render() {
    return (
      <React.Fragment>
        <input
          onChange={this.updateValue}
          className="new-todo"
          value={this.inputValue}
          placeholder="What needs to be done?"
          onKeyUp={this.submitTodo}
        />
      </React.Fragment>
    );
  }
}
