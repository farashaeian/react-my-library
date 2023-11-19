import logo from './logo.png';
import { Navbar, Books, Book } from './components';
import { useState } from 'react';

import './App.css';

function App() {
  const [book, setBook] = useState('');

  const BooksList = [
    {
      "Name": 'Sad Drama',
      'Author': 'Jck Black',
      "Publisher": 'Store',
      'Genre': 'drama',
      "Prices": '40'
    },
    {
      "Name": 'Red Dragon',
      "Author": 'William Hook',
      "Publisher": 'Potters',
      "Genre": 'Fiction',
      "Prices": '20'
    },
    {
      "Name": 'Nice Drama',
      "Author": 'Alex Been',
      "Publisher": 'Store',
      "Genre": 'drama',
      "Prices": '35'
    }
  ];

  return (
    <div>
      <Navbar />
      {BooksList.map((item, index) => <Book key={index} book={item}/>)}
      {/* <Book /> */}
      {/* <Books /> */}
    </div>
  );
}

export default App;
