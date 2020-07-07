import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state.inputValue);
  };

  render() {
    return (
      <form className="form">
        <input
          className="formInput"
          type="text"
          id="todoTask"
          placeholder="New Task"
          name="todo"
          onChange={this.handleInput}
          value={this.inputValue}
        />
        <button className="button" onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
