import React from 'react'

// styles
import styled from "styled-components";

const FormWrapper = styled.div`
    display: grid;
    grid-template-colums: repeat(6, 1fr);
    margin-top: 50px;
`
const FormItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 10px; 
`


export const TodoForm = (props) => {
  return (
    <>
        {/* FORM */}
        <FormWrapper>

            <h1>Menage data from API with React and Axios</h1>
            <form
                onSubmit={(event) => props.handleSubmit(event)}
            >
                <FormItems>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={props.state1}
                        onChange={(e) => props.handleChange(e, 'state1')}
                    >
                    </input>
                </FormItems>
                <FormItems>
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={props.state2}
                        onChange={(e) => props.handleChange(e, 'state2')}
                    >
                    </input>
                </FormItems>
                <FormItems>
                    <input
                        type='number'
                        placeholder='Salary'
                        value={props.state3}
                        onChange={(e) => props.handleChange(e, 'state3')}
                    >
                    </input>
                </FormItems>
                <FormItems>
                    <button type='submit'>Add</button>
                </FormItems>
            </form>
        </FormWrapper>
    </>
  )
}
