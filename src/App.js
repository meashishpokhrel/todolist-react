import React, {Component} from 'react';
import Todos from "./components/Todos.component";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>React</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
