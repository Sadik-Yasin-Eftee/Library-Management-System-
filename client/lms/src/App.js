import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from './components/bookForm';
import Booklist from './components/booklist';
import Register from './components/register';
import UpdateBook from './components/updateBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Booklist/>} />
        <Route path="/bookform" element={<BookForm/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/updateBook" element={<UpdateBook/>} />
      </Routes>
    </Router>
  );
}

export default App;
