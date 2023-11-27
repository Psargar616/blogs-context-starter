
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage"
import TagPage from "./Pages/TagPage"

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // fetchBlogPosts();
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), category);
    }else{
      fetchBlogPosts();
    }
  }, [location.pathname, location.search]);

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
      <Route path="/categories/:category" element={<CategoryPage/>}></Route>
    </Routes>
  );
}
