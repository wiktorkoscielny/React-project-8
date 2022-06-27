import React from 'react'

export const TodoList = (props) => {
  return (
    <>
        {props.todos.map((todo, index) => {
                    return(
                        <ul key={index}>
                            <li>{todo.firstName}</li>
                            {/* DELETE */}
                            <button
                                onClick={(event) => props.removeTodo(todo.id)}
                            >
                                X
                            </button>
                        </ul>
                    )
                })}
    </>
  )
}
