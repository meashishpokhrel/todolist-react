import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';


export class TodoItems extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.compeleted ? "line-through" : "none"
        }
        
    }

    markComplete = (e) => {
        console.log(this.props) 
    }

    render() {
        const {id,title} = this.props.todo;
        return (
            <div style= { this.getStyle() }>

                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {}
                    {title}                    
                    <>
                    <Button onClick={this.props.delTodo.bind(this,id)} variant="danger" size="sm" style={{float:"right", borderRadius: "50%"}}>X</Button>{' '}
                    </></p>
            </div>

        )
    }
}



//Prop Types
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

  }

  
export default TodoItems;
