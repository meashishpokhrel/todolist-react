import React, {Component} from 'react';

class Todos extends Component {
  render(){
    console.log(this.props.todos);

    return (
      <div className="App">
        <h1>This is todolist</h1>
      </div>
    );
  }
}

export default Todos;