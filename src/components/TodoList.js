import React, { useState } from 'react'

// styles
import styled from "styled-components";

const TableWrapper = styled.div`
        width: fit-content;
        text-align: center;
        margin-top: 3%;
        margin-left: auto;
        margin-right: auto;
`

export const TodoList = (props) => {
    const [query, SetQuery] = useState('');

  return (
    <>
        <section>
                {/* input field */}

                  <input 
                    type='text' 
                    placeholder='Search...' 
                    onChange={(e) => SetQuery(e.target.value)}
                  >

                  </input>
      
            <TableWrapper>
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
                            {props.todos.filter(todo => (todo.firstName, todo.lastName).toLowerCase().includes(query.toLowerCase())).map((todo, index) => {
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
                        </tfoot>
                </table>
            </TableWrapper>
        </section>
    </>
  )
}
