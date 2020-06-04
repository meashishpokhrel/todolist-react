import React, {Component} from 'react';
import Todos from "./components/Todos";
import Header from "./components/layouts/header";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: "Lets do this!",
        compeleted: false
      },
      {
        id:2,
        title: "Do homework",
        compeleted: true
      },
      {
        id:3,
        title: "Covid 19 tracker app",
        compeleted: true
      }
    ]
  }

  //Mark Toggle
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map (todo => {
      if (todo.id === id){
        todo.compeleted= !todo.compeleted
      }
      return todo;
    })})
    
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState ({ todos: [...this.state.todos.filter( todo =>
      todo.id !== id
    )]});
    
  }

  render(){
    return (
      <div className="App">
        < Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
