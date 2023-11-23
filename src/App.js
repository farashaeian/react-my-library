import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Navbar, Books, Users } from './components';
import './App.css';

function App() {

  const [getBooks, setBooks] = useState([]);
  const [getUsers, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data: booksData} = await axios.get(
          "http://localhost:9000/books"
        );
        const {data: usersData} = await axios.get(
          "http://localhost:9000/users"
        );
        setBooks(booksData);
        setUsers(usersData);

      } catch (err) {
        console.log(err.message);
      }
    }
    
    fetchData();
  }, [])

  return (
    <div>
      <Navbar />
      {/* <Books /> */}
      <div className='p-5 flex justify-content-center'>
        <Link to="/books">Books</Link>
        {"    "}
        <Link to="/users">Users</Link>
      </div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/books' element={<Books />} />
        <Route path='/users' element={<Users />} />

        {/* below route shows 'not found' message when user type an url which doesn't exist: */}
        {/* path='*' means any urls except above urls */}
        <Route path='*' element={<main><h5 className='text-center pt-5'>404 Not found</h5></main>} />
      </Routes>
    </div>
  );
}

export default App;
