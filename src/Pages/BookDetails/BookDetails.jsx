import React from 'react';
import star from '../../assets/Vector (1).png'
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoredDB, removeID } from '../../utilites/addToDB';

const BookDetails = () => {
    const { id } = useParams()
    const datas = useLoaderData()
    const data = datas.find(book => book.bookId === parseInt(id))
    const navigate = useNavigate()

    const handleMarkAsRead = (id)=>
    {
         addToStoredDB(id)
    }

    const { bookName, author, image, publisher, rating, review,
        yearOfPublishing, category, tags, totalPages } = data

    return (
        <div className='sm:grid grid-cols-2 gap-6 max-sm:p-4'>
            <div className='bg-amber-50 flex justify-center items-center h-[650px] rounded-xl'>
                <figure>
                    <img className='h-[584px] w-[425px] rotate-x-15  -rotate-y-30' src={image} alt="Failed to load the image" />
                </figure>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>BookName: <span className='font-bold'>{bookName}</span></h1>
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
                <div className='grid grid-cols-2'>
                    <button onClick={()=>handleMarkAsRead(id)} className='btn btn-outline px-6 mr-2'>Mark as read</button>
                    <button onClick={()=>removeID(id)} className='btn btn-error  mr-2'>Remove from readlist</button>
                
                </div>
                <button className='btn btn-info rounded-lg text-white' onClick={() => navigate(-1)}>BACK</button>
            </div>


        </div>
    );
};

export default BookDetails;