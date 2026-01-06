import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import { getStoredBook } from '../../utilites/addToDB';

const ReadList = () => {
  const datas = useLoaderData()
  console.log(datas);
  const [readLists, setReadLists] = useState([])
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

  return (
    <Tabs>
      <TabList>
        <Tab>Read list</Tab>

      </TabList>

      <TabPanel>
        <button onClick={() => localStorage.setItem("readList", [])} className='btn bg-red-600 mr-2'>Clear Readlist</button>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {readLists.map(book => <Book key={book.bookId} book={book}></Book>)}
        </div>

      </TabPanel>

    </Tabs>
  );
};

export default ReadList;