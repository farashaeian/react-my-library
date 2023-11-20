import  Book  from "./Book";

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

    return (
        <>
            {BooksList.map((item, index) => <Book key={index} book={item} />)}
        </>
    );
}

export default Books;
