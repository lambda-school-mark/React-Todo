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
      <form>
        <input
          type="text"
          id="todoTask"
          placeholder="Tasks"
          name="todo"
          onChange={this.handleInput}
          value={this.inputValue}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
