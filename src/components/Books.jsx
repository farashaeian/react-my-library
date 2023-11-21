import React, { useState } from 'react';
import Book from "./Book";

const Books = () => {
    const initialBooksList = [
        {
            "Name": 'Sad Drama',
            'Author': 'Jck Black',
            "Publisher": 'Store',
            'Genre': 'drama',
            "Prices": '40',
            "Borrowers": ['Jack', 'Human', 'Jhon']
        },
        {
            "Name": 'Red Dragon',
            "Author": 'William Hook',
            "Publisher": 'Potters',
            "Genre": 'Fiction',
            "Prices": '20',
            "Borrowers": []
        },
        {
            "Name": 'Nice Drama',
            "Author": 'Alex Been',
            "Publisher": 'Store',
            "Genre": 'drama',
            "Prices": '35',
            "Borrowers": ['Jack', 'Human']
        }
    ];

    const [booksList, setBooksList] = useState(initialBooksList);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedLeftColumnBook, setSelectedLeftColumnBook] = useState(null);

    const showBook = (book) => {
        setSelectedBook(book);
        setSelectedLeftColumnBook(book);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setSelectedBook(null); // Clear selected book when performing a new search
    };

    // Filter books based on the search term
    const filteredBooks = booksList.filter((book) =>
        searchTerm !== '' && book.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='row'>
                <div className='p-5 col-6'>
                    {/* Display books in the left column */}
                    {booksList.map((item, index) => (
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
                            <h2>Selected Book from Left Column</h2>
                            <Book book={selectedLeftColumnBook} />
                        </div>
                    )}
                </div>
                <div className='p-5 col-6'>
                    {/* Search bar */}
                    <input
                        type="text"
                        placeholder="Search for a book..."
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
        </>
    );
}

export default Books;
