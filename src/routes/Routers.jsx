import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoListPage from '../pages/TodoListPage';
import About from '../pages/About'; 
import ApiData from '../pages/ApiData';
import Herder from '../components/Herder';
import React from 'react'

function Routers() {
  return (
    <Router>
      <Herder />  
      <div className="p-4">
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/ApiData" element={<ApiData />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Routers
