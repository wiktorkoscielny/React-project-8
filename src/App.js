import React from 'react';

// components
import Todo from './components/Todo';

//styles
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    text-align: center;
  }

  html {
    scroll-behavior: smooth;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
}

export default App;
