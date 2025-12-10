import React from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {
    //   const [allBooks,setAllBooks]=useState([])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {booksData.map((book)=><Book  key={book.bookId} book={book}></Book>)}
        </div>
    );
};

export default Books;