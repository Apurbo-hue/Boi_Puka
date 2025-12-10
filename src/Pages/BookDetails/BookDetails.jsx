import React from 'react';
import star from '../../assets/Vector (1).png'
import { useLoaderData, useNavigate, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams()
    const datas = useLoaderData()
    const data = datas.find(book => book.bookId === parseInt(id))
    const navigate = useNavigate()

    const { bookName, author, image, publisher, rating, review,
        yearOfPublishing, category, tags, totalPages } = data

    return (
        <div className='sm:grid grid-cols-2 gap-6 max-sm:p-4'>
            <div className='bg-amber-50 flex justify-center items-center h-[650px] rounded-xl'>
                <figure>
                    <img className='h-[584px] w-[425px] rotate-x-15

-rotate-y-30

' src={image} alt="Failed to load the image" />
                </figure>
            </div>
            <div>
                <h1>BookName:{bookName}</h1>
                <p>By: {author}</p>
                <div className='border-2'></div>
                <h1>{category}</h1>
                <div className='border-2'></div>
                <h1><span className='font-bold'>Review:</span> {review}</h1>
                <div className='flex text-green-400 mt-2 gap-2'>
                    <h1 className='font-bold'>Tag:</h1> {tags.map(tag => <p className='bg-[#f4fcf3] rounded-xl px-2'>#{tag}</p>)}
                </div>
                <div className='border-2'></div>
                <h1>Number of Pages: {totalPages}</h1>
                <h1>Publisher: {publisher}</h1>
                <h1>Year of publishing: {yearOfPublishing}</h1>
                <div className='flex gap-2'>
                    <p> Ratings: {rating}</p>
                    <figure>
                        <img src={star} />
                    </figure>
                </div>
                <button className='btn' onClick={() => navigate(-1)}>Back</button>
            </div>


        </div>
    );
};

export default BookDetails;