const booksList = [
    {
        "Id":"1",
        "Name": "Sad Drama",
        "Author": "Jck Black",
        "Publisher": "Store",
        "Genre": "drama",
        "Prices": "40",
        "Borrowers": ["Jack", "Human", "Jhon"]
    },
    {
        "Id":"2",
        "Name": "Red Dragon",
        "Author": "William Hook",
        "Publisher": "Potters",
        "Genre": "Fiction",
        "Prices": "20",
        "Borrowers": []
    },
    {
        "Id":"3",
        "Name": "Nice Drama",
        "Author": "Alex Been",
        "Publisher": "Store",
        "Genre": "drama",
        "Prices": "35",
        "Borrowers": ["Jack", "Human"]
    }
]

export function getBooks(){
    return booksList;
};
