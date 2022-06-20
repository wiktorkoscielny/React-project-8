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
          axios.get(getUrl, {
            headers: {
                'X-Master-Key': secretKey,
            }
        }).then(res => {
            console.log(res);
            const todos = (res.data);
            this.setState(todos);
            //...todos
            // console.log(todos);
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