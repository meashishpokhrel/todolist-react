import React, {Component} from 'react';
import Todos from "./components/Todos.component";
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
        compeleted: false
      },
      {
        id:3,
        title: "Covid 19 tracker app",
        compeleted: false
      }
    ]
  }
  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>React</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
