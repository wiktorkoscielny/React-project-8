import React, { Component } from 'react'
import axios from 'axios'

// components
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export class Todo extends Component {
    state = {
        state1: '',
        todos: [
            {
                firstName: '',
                id: ''
            }
        ]
    }

    // fetching data
    fetchTodo = () => {
        axios.get(`https://my-json-server.typicode.com/wiktorkoscielny/React-project-8/todos`)
          .then(res => {
            // console.log(res)
            const todos = res.data;
            // console.log(todos)
            this.setState({
              // ...todos,
              todos
            });
          })
    }

    // mounting component
    componentDidMount() {
        this.fetchTodo()
    }

    // changing state value
    handleChange = (e, name) => {
        // console.log(e.target.value);
        this.setState({
            [name]: e.target.value
        })
    }

    // posting state value to json, setting new state
    // if statement is necessary due to fake typicode live server
    handleSubmit = (event) => {
        event.preventDefault()
        const serverLink = `https://my-json-server.typicode.com/wiktorkoscielny/React-project-8/todos`;
        const todos = this.state.todos;
      
        if ( todos.length === 0) {
            axios.post(serverLink, 
                {
                  firstName: this.state.state1,
                  id: 1
                })
                .then(res => {
                  // console.log(todos.length);
                  this.setState({
                    state1: '',
                    todos: [
                      ...this.state.todos,
                      {
                        firstName: res.data.firstName,
                        id: res.data.id
                      }
                    ]
                  })
              })
        } else {
            axios.post(serverLink, 
                {
                  firstName: this.state.state1,
                  id: todos[todos.length - 1].id + 1
                })
                .then(res => {
                  // console.log(todos.length);
                  this.setState({
                    state1: '',
                    todos: [
                      ...this.state.todos,
                      {
                        firstName: res.data.firstName,
                        id: res.data.id
                      }
                    ]
                  })
              })
        }
    }

    // removing data from json and ui
    removeTodo = id => {
        // Remove item from UI 
        const todos = this.state.todos.filter(item => item.id !== id);
        this.setState({ todos });
        // console.log(this.state)
        // Delete data from backend - but here i'm using fake data
        // axios.delete(`https://my-json-server.typicode.com/wiktorkoscielny/React-project-8/todos/${id}`)
        //   .then(res => {
        //     console.log(res.data);
        // })
      };

    render() {
        return (
            <div className='container'>

                {/* FORM */}
                <TodoForm 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value={this.state.state1}
                />

                {/* DATA MAP */}
                <TodoList 
                    todos={this.state.todos}
                    removeTodo={this.removeTodo}
                />
                
            </div>
        )
    }
}
export default Todo