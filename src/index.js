import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Container from './container';
import MovieList from './movie-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>
 
);

/**
 * These articles are useful for getting started with React:
 * https://react.dev/learn (React basics)
 * https://react.dev/learn/thinking-in-react (This is super useful for determining how to get started with the logistics)
 * https://react.dev/learn/passing-props-to-a-component (A primer for props)
 */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
