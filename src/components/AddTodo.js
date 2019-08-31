import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  // what we want with onSubmit is that we want to add the todo written in the form(as title) to the list of todos already present.
  // for that we add a function named addTodo as the prop of this AddTodo component and then we will go upto App.js to actually add this new todo to already existing todos
  onSubmit = (e) => {
    e.preventDefault();
    // add addTodo as the prop of AddTodo component
    this.props.addTodo(this.state.title);
    // then clear the field in the form once we are done with title
    this.setState({ title: '' });
  }
  // Here the name of the method onCHange has no significance, we could have put another name here as well.
  // here e.target.name was actually title because we want to change the value of title to whatever we are typing at the moment.
  // But many times there can be more than one fields in the form. In that case, we need to set the e.target.name so that it is valid for all fields.
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={ this.onSubmit } style={ { display: 'flex' } }>
        <input type="text" 
        name="title" 
        placeholder="Add Todo..."
        style={{flex: '10',padding:'5px'}}
        value= {this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="submit" 
        value="submit"
        className="btn"
        style={{flex:'1'}}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  // markComplete : PropTypes.func.isRequired,
  // delTodo: PropTypes.func.isRequired
}

export default AddTodo
