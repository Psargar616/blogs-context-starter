import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
          <div
            key={post.id}
            className="border-2 border-slate-200 py-6 px-4 shadow-md rounded-md hover:shadow-2xl transition-all duration-200 cursor-pointer"
          >
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p className="text-xs">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-xs mt-[4px]">
              Posted on <span>{post.date}</span>
            </p>

            <p className="text-md mt-[14px] font-medium">{post.content}</p>
            <div className="w-full flex gap-x-4 flex-wrap mt-2">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className="text-xs font-bold underline text-blue-700 "
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
