import React, { Component } from 'react'
import axios from 'axios'

// components
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export class Todo extends Component {
    state = {
        state1: '',
        state2: '',
        state3: '',
        todos: [
            {
                firstName: '',
                lastName: '',
                salary: 0,
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
                  lastName: this.state.state2,
                  salary: this.state.state3,
                  id: 1
                })
                .then(res => {
                  // console.log(todos.length);
                  this.setState({
                    state1: '',
                    state2: '',
                    state3: '',
                    todos: [
                      ...this.state.todos,
                      {
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        salary: res.data.salary,
                        id: res.data.id
                      }
                    ]
                  })
              })
        } else {
            axios.post(serverLink, 
                {
                  firstName: this.state.state1,
                  lastName: this.state.state2,
                  salary: this.state.state3,
                  id: todos[todos.length - 1].id + 1
                })
                .then(res => {
                  // console.log(todos.length);
                  this.setState({
                    state1: '',
                    state2: '',
                    state3: '',
                    todos: [
                      ...this.state.todos,
                      {
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        salary: res.data.salary,
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

        const sumOfSalary = this.state.todos.reduce((acc, i) => acc + parseInt(i.salary), 0);
        return (
            <div className='container'>

                {/* FORM */}
                <TodoForm 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    value1={this.state.state1}
                    value2={this.state.state2}
                    value3={this.state.state3}
                    sumOfSalary={this.sumOfSalary}
                />

                {/* DATA MAP */}
                <TodoList 
                    todos={this.state.todos}
                    removeTodo={this.removeTodo}
                    sumOfSalary={sumOfSalary}
                />
                
                
            </div>
        )
    }
}
export default Todo