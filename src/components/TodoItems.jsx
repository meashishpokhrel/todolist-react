import React, { Component } from 'react';
import PropTypes from "prop-types";


export class TodoItems extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//Prop Types
TodoItems.propTypes = {
    todo: PropTypes.array.isRequired
  }
  
export default TodoItems;
