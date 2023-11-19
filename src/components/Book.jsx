
const Book = ({book}) => {
    return (
        <>
            <div>
                <span>Name:{" "}</span>
                <span>{book.Name}</span>
            </div>
            <div>
                <span>Author:{" "}</span>
                <span>{book.Author}</span>
            </div>
            <div>
                <span>Publisher:{" "}</span>
                <span>{book.Publisher}</span>
            </div>
            <div>
                <span>Genre:{" "}</span>
                <span>{book.Genre}</span>
            </div>
            <div>
                <span>Prices:{" "}</span>
                <span>{book.Prices}</span>
            </div>
            <hr />
        </>
    );
}

export default Book;
