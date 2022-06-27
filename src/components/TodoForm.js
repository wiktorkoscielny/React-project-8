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
                <button type='submit'>Add</button>
            </form>
        </div>
    </>
  )
}
