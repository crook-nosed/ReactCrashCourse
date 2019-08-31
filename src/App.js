import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// we can use uuid to generate unique ids on the fly when we need them.
// import uuid from 'uuid';
// import logo from './logo.svg';
import './App.css';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
    // while working without json placeholder api, the todos array was hardcoded as below:
    // todos: [
    //   {
    //     id:uuid.v4(),
    //     title: 'Take out the trash',
    //     completed: false
    //   },
    //   {
    //     id:uuid.v4(),
    //     title: 'Talk with wife',
    //     completed: false
    //   },
    //   {
    //     id:uuid.v4(),
    //     title: 'Meeting with boss',
    //     completed: false
    //   }
    // ]
  }

  componentDidMount() {
    // get 10 todos and store them in the array todo in the state of our component App
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
         .then(res => {
           this.setState({ todos : res.data})
         });
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;

      }
      return todo;
    })});
  }

  // delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}) );
  }

  // add todo later.... post to json placeholder api
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }) );
  }
  // In order to go to different page like about page in this course, we need router to work with router, we need to wrap everything in a particular page with 'Router' as shown below
  render() {
    return (
      <Router>
        {/* Now here we will write different routes for different pages but as our main page contains more than one component, we need to use something known as render props as shown below to encapsulate all the components */}
        <div className="App">
          <div className="container">
            <Header />
            {/* Route for homepage always contains '/' as path */}
            <Route exact path='/' render = {props => (
              <React.Fragment>
                {/* introduce addtodo as prop to AddTodo */}
                <AddTodo addTodo = {this.addTodo} />
                <Todos todos = {this.state.todos} markComplete={ this.markComplete } delTodo = { this.delTodo } />
              </React.Fragment>
            )} />
            {/* Route for About page */}
            <Route path='/about' component={About} />
            
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
