import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Banner from "../Components/Banner/Banner";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadLIst/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        loader:()=>fetch('/booksData.json')
        ,Component:Home,
      }
      ,
   
      {path:"about", Component:About},

      {path:"readList",loader:()=>fetch('/booksData.json'),Component:ReadList}, 
      
      {path:"bookDetails/:id",loader:()=>fetch('/booksData.json'),Component:BookDetails}
    ]
  },
]);
