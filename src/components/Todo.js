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

// changing state value
handleOnChange = (e, name) => {
    console.log(e.target.value);
    this.setState({
        [name]: e.target.value
    })
}

// posting new state
handleSubmit = async (e) => {
    e.preventDefault();
    // saving data on JSONbin
    await axios.put(getUrl, {
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': secretKey,
        },
    }, {
        firstName: this.state.state1,
    }).then(res => {
        console.log(res);
        this.setState({
            state1: '',
            todos: [
               ...this.state.todos,
                {
                    firstName: res.data.firstName,
                }
            ]
        });
    })
}

componentDidUpdate(prevProps) {

}

    render() {
        return (
            <div className='container'>
                <div className='container__label'>
                    <form
                        onSubmit={(e) => this.handleSubmit(e)}
                    >
                        <label>First Name:</label>
                        <input
                            type='text'
                            value={this.state.state1}
                            onChange={(e) => this.handleOnChange(e, 'state1')}
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