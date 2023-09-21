import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Route, Routes } from "react-router";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    // <div className="w-full h-full flex flex-col gap-y-2">
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:blogID" element={<BlogPage/>}></Route>
      <Route path="/tags/:tag" element={<TagPage/>}></Route>
      <Route path="/categories/:categories" element={<CategoryPage/>}></Route>
    </Routes>
  );
}
