import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
      <div className="w-full h-full flex flex-col gap-y-2">
      <Header />
      <div>
      <Blogs />
      <Pagination />

      </div>
      
    </div>
  )
}

export default Home
