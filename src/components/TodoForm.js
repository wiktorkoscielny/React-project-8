import React from 'react'

export const TodoForm = (props) => {
  return (
    <>
        {/* FORM */}
        <div className='container__label'>
            <form
                onSubmit={(e) => props.handleSubmit(e)}
            >
                    <label>First Name:</label>
                    <input
                        type='text'
                        value={props.state1}
                        onChange={(e) => props.handleChange(e, 'state1')}
                    >
                    </input>

                    <label>Last Name:</label>
                    <input
                        type='text'
                        value={props.state2}
                        onChange={(e) => props.handleChange(e, 'state2')}
                    >
                    </input>

                    <label>Salary:</label>
                    <input
                        type='number'
                        value={props.state3}
                        onChange={(e) => props.handleChange(e, 'state3')}
                    >
                    </input>
                <button type='submit'>Add</button>
            </form>
        </div>
    </>
  )
}
