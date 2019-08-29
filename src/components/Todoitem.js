import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  // getStyle method
  getStyle =  () => {

    // we will write the logic for the fact that if the todo is completed cross it or else leave it as is.
    // let textDecor;
    // if(this.props.todo.completed) {
    //       textDecor = 'line-through' 
    //   } else {
    //       textDecor = 'none'
        
    //   }
    // return{
    //   backGround: '#f4f4f4',
    //   padding: '10px',
    //   borderBottom: '1px #ccc dotted',
    //   textDecoration: textDecor
    // }
    // better way is to use ternary operator.
    return{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
  }
  // Here if we dont use arrow function, it will give error as "this" is not defined inside the function markComplete, now we could bind this inside the function body while calling it as shown below:
  // this.markComplete.bind(this);
  // but using arrow function is more convenient and traversy used it.
  // markComplete = (e) => {
  //   console.log(this.props);
  // }
  render() {
    const { id, title } = this.props.todo;
    return (
      // <div style={{ backgroundColor: '#f4f4f4'}}> in place of this we can use style as shown below with itemStyle
      // <div style={itemStyle}> but even better way would be to add function for styling which we have done below. we will use a method inside this class this time
      <div style={this.getStyle()}>
        <p> 
          {/* At this point of time we have created check box but to actually do something with it like crossing the line is the task is completed we need to add  event thats what has been done with onChange below */}
          {/* Now to figure which id is clicked on we bind id with the marComplete prop */}
          {/* <input type="checkbox" onChange= { this.props.markComplete.bind(this, this.props.todo.id) }/>
          { this.props.todo.title } */}
          {/* writing this.props.todo again and again can be cumbersome, we can use destructuring to solve this problem see above */}
          <input type="checkbox" onChange= { this.props.markComplete.bind(this, id) }/>
          { title }
          <button onClick={ this.props.delTodo.bind(this, id) } style = { buttonStyle }>x</button>
        </p>
      </div>
    )
  }
}

// to be used when we want to style from variable like look at the styling of the div above for clarification.
// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
}
const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right'
}
export default Todoitem
