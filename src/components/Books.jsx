import React, { useState } from 'react';
import Book from "./Book";
// import SearchBar from './SearchBar';

const Books = () => {

    const BooksList = [
        {
            "Name": 'Sad Drama',
            'Author': 'Jck Black',
            "Publisher": 'Store',
            'Genre': 'drama',
            "Prices": '40',
            "Borowers": ['Jack', 'Human', 'Jhon']
        },
        {
            "Name": 'Red Dragon',
            "Author": 'William Hook',
            "Publisher": 'Potters',
            "Genre": 'Fiction',
            "Prices": '20',
            "Borowers": []
        },
        {
            "Name": 'Nice Drama',
            "Author": 'Alex Been',
            "Publisher": 'Store',
            "Genre": 'drama',
            "Prices": '35',
            "Borowers": ['Jack', 'Human']
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    // const [filteredData, setFilteredData] = useState(BooksList);

    const [selectedBook, setSelectedBook] = useState();

    const showBook = (book) => {
        setSelectedBook(book);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setSelectedBook(null); // Clear selected book when performing a new search
    };

    // Filter books based on the search term
    const filteredBooks = BooksList.filter((book) =>
        book.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='row'>
                <div className='p-5 col-6'>
                    {/* <SearchBar
                        data={BooksList}
                        setFilteredData={setFilteredData} />
                    <br /> */}
                    {BooksList.map((item, index) =>
                        <p key={index} onClick={() => showBook(item)}>{item.Name}</p>
                    )}
                    <div>
                        <button>+ Add</button>
                    </div>
                    <hr />
                    {selectedBook && <Book book={selectedBook} />}
                </div>
                <div className='col-6'>
                    <div>
                        {/* Search bar */}
                        <input
                            type="text"
                            placeholder="Search for a book..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />

                        {/* Display search results */}
                        {filteredBooks.map((item, index) => (
                            <p key={index} onClick={() => showBook(item)}>
                                {item.Name}
                            </p>
                        ))}

                        {/* Conditionally render the Book component if selectedBook is not null */}
                        {selectedBook && <Book book={selectedBook} />}
                    </div>
                    {/* {filteredData.map((item) => (
                        <div key={item.id}>
                            <div>{item.Name}</div>
                        </div>
                    ))} */}
                </div>
            </div>
        </>
    );
}

export default Books;
