import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import BookForm from './components/bookForm';
import Booklist from './components/booklist';
import Login from './components/login';
import Register from './components/register';
import UpdateBook from './components/updateBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute component={Booklist} />} />
        <Route path="/bookform" element={<ProtectedRoute component={BookForm} />} />
        <Route path="/updateBook" element={<ProtectedRoute component={UpdateBook} />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ component: Component, ...rest }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token'); // Check if JWT token is stored in local storage
  if (isAuthenticated) {
    return <Component {...rest} />;
  } else {
    navigate('/register', { state: { from: rest.location } });
    return null;
  }
}

export default App;
