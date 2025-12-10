import React from 'react';
import star from '../../assets/Vector (1).png'
import { Link } from 'react-router'

const Book = ({ book }) => {

    // const [image,bookName,rating,category]=book
    const { image,bookId, bookName, publisher, author, category, rating, yearOfPublishing, totalPages, tags } = book

    return (
    

   <Link to={`bookDetails/${bookId}`}>
                <div className="card bg-base-100 w-9/10 h-full sm:w-full mx-auto border p-6 mt-2 shadow">
                <figure className='bg-[#f3f3f3] rounded-xl p-2'>
                    <img className=' h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='flex text-green-400 mt-2 gap-2'>
                    {tags.map(tag => <p className='bg-[#f4fcf3] rounded-xl px-2'>{tag}</p>)}
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By: <span className='font-bold'>{author}</span></p>
                    <p>Total Pages: {totalPages}</p>
                    <p>Publisher: {publisher}</p>
                    <div className='border'></div>
                    <div className="flex">
                        <p>{category}</p>

                        <div className='flex gap-2'>
                            <p>{rating}</p>
                            <img src={star} />
                        </div>

                    </div>
                </div>
            </div>
   </Link>


    );
};

export default Book;