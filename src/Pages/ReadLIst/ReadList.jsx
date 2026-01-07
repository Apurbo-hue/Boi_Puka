import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import { getStoredBook } from '../../utilites/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ReadList = () => {
  const datas = useLoaderData()


  const [readLists, setReadLists] = useState([]);
  const [sortBy, setSortBy] = useState("");


  const loadedDatas = useEffect(
    () => {
      const storedBooksData = getStoredBook();
      const convertedStoredBooksData = storedBooksData.map(data => parseInt(data));
      console.log(convertedStoredBooksData);

      const myBookList = datas.filter(book => convertedStoredBooksData.includes(book.bookId))
      console.log(myBookList)

      setReadLists(myBookList);
    }, []
  )

  const handleSortBy = (type) => {

    setSortBy(type);

    if (type === "pages") {
      const sortByPage = [...readLists].sort((a, b) => a.totalPages - b.totalPages);
      setReadLists(sortByPage);
    }
    else if (type === "rating") {
      const sortByRating = [...readLists].sort((a, b) => a.rating - b.rating);
      setReadLists(sortByRating);
    }
  }

  return (

    <Tabs>

      <TabList>
        <Tab>Read list</Tab>

      </TabList>

      <TabPanel>
        <div className='flex justify-between'>

          <details className="dropdown">
            <summary className="btn mb-2 p-2">Sort By : {sortBy ? sortBy : ""}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li onClick={() => handleSortBy("pages")}><a>Pages no.</a></li>
              <li onClick={() => handleSortBy("rating")}><a>Rating</a></li>
            </ul>
          </details>

          <button onClick={() => {
            localStorage.setItem("readList", []);
            Swal.fire({
              title: "Readlist cleared",
              icon: "success",
              draggable: true
            });
          }} className='btn bg-red-600 mr-2'>Clear Readlist</button>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {readLists.map(book => <Book key={book.bookId} book={book}></Book>)}
        </div>

      </TabPanel>

    </Tabs>
  );
};

export default ReadList;