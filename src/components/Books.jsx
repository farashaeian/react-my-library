import React, { useState, useEffect } from 'react';
import Book from "./Book";
import Footer from './Footer';
 // get data from a js file  ith a function instead of locating the array directly here:
// import { getBooks } from '../data/data';
import axios from 'axios';


const Books = () => {

    // get data from a js file  ith a function instead of locating the array directly here:
    // const initialBooksList = getBooks();
    // const [booksList, setBooksList] = useState(initialBooksList);

    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedLeftColumnBook, setSelectedLeftColumnBook] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: booksData } = await axios.get(
                    "http://localhost:9000/books"
                );
                setBooks(booksData);

            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])


    const showBook = (book) => {
        setSelectedBook(book);
        setSelectedLeftColumnBook(book);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setSelectedBook(null); // Clear selected book when performing a new search
    };

    // Filter books based on the search term
    const filteredBooks = books.filter((book) =>
        searchTerm !== '' && book.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='row'>
                <h1 className='text-center p-5'>books</h1>
            </div>
            <hr />
            <div className='row'>
                <div className='p-5 col-6'>
                    {/* Display books in the left column */}
                    {books.map((item, index) => (
                        <p key={index} onClick={() => showBook(item)}>
                            {item.Name}
                        </p>
                    ))}
                    <div>
                        <button>+ Add</button>
                    </div>
                    <hr />

                    {/* Show the selected book from the left column below it */}
                    {selectedLeftColumnBook && (
                        <div>
                            <h2>Selected Book</h2>
                            <Book book={selectedLeftColumnBook} />
                        </div>
                    )}
                </div>
                <div className='p-5 col-6'>
                    {/* Search bar */}
                    <input
                        type="text"
                        placeholder="Search A Book Name..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    {/* Display search results in the right column */}
                    {searchTerm !== '' && (
                        <>
                            {filteredBooks.length > 0 ? (
                                filteredBooks.map((item, index) => (
                                    <p key={index} onClick={() => showBook(item)}>
                                        {item.Name}
                                    </p>
                                ))
                            ) : (
                                <p>No matching books found</p>
                            )}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Books;
