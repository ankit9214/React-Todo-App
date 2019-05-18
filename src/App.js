import React, {Component} from 'react';
import Todos from './Todos.js'
import AddTodo from './AddForm.js';

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const changedTodo = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: changedTodo
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo = {this.addTodo}/>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
