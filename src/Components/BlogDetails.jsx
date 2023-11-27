import React from 'react'
import { NavLink } from 'react-router-dom';

const BlogDetails = ({post}) => {
  return (
    <div
    key={post.id}
    className="border-2 border-slate-200 py-6 px-4 shadow-md rounded-md hover:shadow-2xl transition-all duration-200 cursor-pointer"
  >
    <NavLink to={`/blogs/${post.id}`} className="text-lg font-bold">{post.title}</NavLink>
    <p className="text-xs">
      By <span className="italic">{post.author}</span> on{" "}
      <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="underline font-bold">{post.category}</NavLink>
    </p>
    <p className="text-xs mt-[4px]">
      Posted on <span>{post.date}</span>
    </p>

    <p className="text-md mt-[14px] font-medium">{post.content}</p>
    <div className="w-full flex gap-x-4 flex-wrap mt-2">
      {post.tags.map((tag, index) => {
        return (
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}
            key={index}
            className="text-xs font-bold underline text-blue-700 "
          >{`#${tag}`}</NavLink>
        );
      })}
    </div>
  </div>
  )
}

export default BlogDetails
