import React from 'react'

export const TodoList = (props) => {

  return (
    <>
    
        <table border='3'>
                <caption>Users</caption>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((todo, index) => {
                        return(
                            <tr key={index}>
                                <td>{todo.firstName}</td>
                                <td>{todo.lastName}</td>
                                <td>{todo.salary}</td>
                                {/* DELETE */}
                                <td>
                                    <button
                                        onClick={(event) => props.removeTodo(todo.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Summary</td>
                        <td colSpan="2">{props.sumOfSalary}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">Delete All<button>X</button></td>
                    </tr>
                </tfoot>
        </table>
        
    </>
  )
}
