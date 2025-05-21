import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {TodoProvider} from './contexts/TodoContext';
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render( 
    <TodoProvider>
    <App />
    </TodoProvider>
);