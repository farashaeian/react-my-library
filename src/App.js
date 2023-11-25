import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Navbar, Books, Users } from './components';
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      {/* <Books /> */}
      <div className='p-5 flex justify-content-center'>
        <Link to="/books">Books</Link>
        {"    "}
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default App;
