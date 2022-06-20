import React, { Component } from 'react'

import axios from 'axios'

export class Todo extends Component {
    // add to the browser cache ?
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
    handleSubmit = async (event) => {
        event.preventDefault()

        // to fake array (json data) expand
        const todos = this.state.todos;
        const lastItem = todos[todos.length - 1];
        const lastId = lastItem.id;

        // Save data on json
        await axios.post(`https://my-json-server.typicode.com/wiktorkoscielny/React-project-8/todos`, {
          firstName: this.state.state1,

          // to fake id increase
          id: lastId + 1
        })
          .then(res => {
            console.log(res.data);
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

    // removing data from json and ui
    removeTodo = id => {
        // Remove item from UI 
        const todos = this.state.todos.filter(item => item.id !== id);
        this.setState({ todos });
        
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
                            {/* DELETE */}
                            <button
                                onClick={(event) => this.removeTodo(todo.id)}
                            >
                                X
                            </button>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
export default Todo