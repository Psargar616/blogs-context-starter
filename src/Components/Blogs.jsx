import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[670px] flex flex-col gap-y-7 py-3 mx-auto my-[6rem] items-center  ">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="text-center text-3xl font-semibold">
          <p>Sorry...😔 No Posts Found.</p>
        </div>
      ) : (
        posts.map((post) => (
         <BlogDetails post={post} key={post.key}></BlogDetails>
        ))
      )}
    </div>
  );
};

export default Blogs;
