import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <div>
        <input type="text" className="todo-input" placeholder="What to do" />
      </div>
    );
  }
};

export default TodoInput;