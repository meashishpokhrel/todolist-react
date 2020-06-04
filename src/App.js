import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layouts/header";
import about from "./components/pages/about";
import AddTodo from "./components/AddTodo";
// import {v4 as uuid} from "uuid";
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data})
      )
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
      <Router>
          <div className="App">
            <div className="container">
                < Header />
                <Route exact path="/" render = {props => (
                  <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                  </React.Fragment>
                )} />
                <Route path="/about" component={about} />
            </div>
          </div>
      </Router>
    );
  }
}

export default App;
