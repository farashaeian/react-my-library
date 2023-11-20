import React, { useState } from 'react';
import Book from "./Book";

const Books = () => {

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

    const [selectedBook, setSelectedBook] = useState();

    const showBook = (book) => {
        setSelectedBook(book);
    };

    return (
        <>
            {BooksList.map((item, index) =>
                <p key={index} onClick={() => showBook(item)}>{item.Name}</p>
            )}
            <hr />
            {selectedBook && <Book book={selectedBook} />}
        </>
    );
}

export default Books;
