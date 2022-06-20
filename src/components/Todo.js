import React, { Component } from 'react'

import axios from 'axios'

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
        console.log(e.target.value);
        this.setState({
            [name]: e.target.value
        })
    }

    // posting state value to json, setting new state
    handleSubmit = (event) => {
        event.preventDefault()
        // Save data on json
        axios.post(`https://my-json-server.typicode.com/wiktorkoscielny/React-project-8/todos`, {
          firstName: this.state.state1,
        })
          .then(res => {
            // console.log(res.data);
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

    render() {
        return (
            <div className='container'>
                
                {/* FORM */}

                <div className='container__label'>
                        <form
                            onSubmit={(e) => this.handleSubmit(e)}
                        >
                            <label>First Name:</label>
                            <input
                                type='text'
                                value={this.state.state1}
                                onChange={(e) => this.handleChange(e, 'state1')}
                            >
                            </input>
                            <button type='submit'>Add</button>
                        </form>
                </div>


                {this.state.todos.map((todo) => {
                    return(
                        <ul key={todo.id}>
                            <li key={todo.id}>{todo.firstName}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
export default Todo