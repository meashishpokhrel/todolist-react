import React, {Component} from 'react';
import Todos from "./components/Todos";
import Header from "./components/layouts/header";
import AddTodo from "./components/AddTodo";
import {v4 as uuid} from "uuid";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:uuid(),
        title: "Lets do this!",
        compeleted: false
      },
      {
        id:uuid(),
        title: "Do homework",
        compeleted: true
      },
      {
        id:uuid(),
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

  //Add Todo
  addTodo = (title) =>{
    const newTodo ={
      id: uuid(),
      title,
      compeleted: false
    }
    this.setState ({todos: [...this.state.todos, newTodo]})
    
  }

  render(){
    return (
      <div className="App">
        <div className="container">
            < Header />
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
