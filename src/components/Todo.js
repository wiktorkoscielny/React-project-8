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

    render() {
        return (
            <div className='container'>
                

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