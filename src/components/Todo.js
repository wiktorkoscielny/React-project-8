import React, { Component } from 'react'

import axios from 'axios'

// JSONbin with JSON
const getUrl = 'https://api.jsonbin.io/b/62b098155c2a444a2d928f10'; // request URL
const secretKey = '$2b$10$/NTPoz.KvyNk4pCk4BUZgurt2vQkkWd44q9REC.DuULvvXPpUPyJ2' // access token

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

    fetchTodo = async () => {
         await axios.get(getUrl, {
            headers: {
                'X-Master-Key': secretKey,
            }
        }).then(res => {
            console.log(res);
            const todos = (res.data);
            this.setState(todos);
            // console.log(todos);
        })
    }

    componentDidMount() {
        this.fetchTodo()
      }

    render() {
        return (
            <div className='container'>
                <div className='container__label'>
                    <label>First Name:</label>
                    <input
                        type='text'
                    >
                    </input>
                    <button type='submit'>Add</button>
                </div>

                {this.state.todos.map((todo) => {
                    return(
                        <ul key={todo.id}>
                            <li>{todo.firstName}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}
export default Todo