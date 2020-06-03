import React, { Component } from 'react';
import PropTypes from "prop-types";


export class TodoItems extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.compeleted ? "line-through" : "none"
        }
        
    }

    render() {
        return (
            <div style= { this.getStyle() }>

                <p>
                    <input type="checkbox"/> {}
                    {this.props.todo.title}</p>
            </div>
        )
    }
}

//Prop Types
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired
  }

  
export default TodoItems;
