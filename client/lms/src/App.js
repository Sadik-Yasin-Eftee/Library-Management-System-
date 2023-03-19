import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookForm from './components/bookForm';
import Booklist from './components/booklist';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Booklist/>} />
        <Route path="/bookform" element={<BookForm/>} />
        {/* <Route path="/seachBook" element={<SeacrhBook/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
