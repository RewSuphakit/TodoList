import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { TodoProvider } from './contexts/TodoContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <TodoProvider>
    <>
      <App />
      <ToastContainer  />
    </>
  </TodoProvider>
);
