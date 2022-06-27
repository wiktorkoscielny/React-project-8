import React, { Component } from 'react'
import axios from 'axios'

// components
import { TodoList } from './TodoList'

// styles
import styled from "styled-components";

const FormWrapper = styled.div`
    display: grid;
    grid-template-colums: repeat(6, 1fr);
    margin-top: 50px;
`
const FormItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 10px; 
`

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
              ...todos,
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
      
        if (todos.length === 0) {
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
        } else if (todos.length > 0) {
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
            <>
                {/* FORM */}
                   <FormWrapper>

                    <h1>Menage data from API with React and Axios</h1>
                    <form
                        onSubmit={(event) => this.handleSubmit(event)}
                    >
                      <FormItems>
                          <input
                              type='text'
                              placeholder='First Name'
                              value={this.state.state1}
                              onChange={(e) => this.handleChange(e, 'state1')}
                          >
                          </input>
                      </FormItems>
                      <FormItems>
                          <input
                              type='text'
                              placeholder='Last Name'
                              value={this.state.state2}
                              onChange={(e) => this.handleChange(e, 'state2')}
                          >
                          </input>
                      </FormItems>
                      <FormItems>
                          <input
                              type='number'
                              placeholder='Salary'
                              value={this.state.state3}
                              onChange={(e) => this.handleChange(e, 'state3')}
                          >
                          </input>
                      </FormItems>
                      <FormItems>
                          <button type='submit'>Add</button>
                      </FormItems>
                    </form>
                  </FormWrapper>
                {/* DATA MAP */}
                <TodoList 
                    todos={this.state.todos}
                    removeTodo={this.removeTodo}
                    sumOfSalary={sumOfSalary}
                />    
            </>
        )
    }
}
export default Todo