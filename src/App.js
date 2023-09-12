import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Book from './pages/book';
import Add from './pages/add';
import Update from './pages/update';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
