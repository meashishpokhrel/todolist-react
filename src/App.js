import React, {Component} from 'react';
import Todos from "./components/Todos";
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
  render(){
    return (
      <div className="App">
        
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
