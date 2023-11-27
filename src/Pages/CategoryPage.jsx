import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router'
const CategoryPage = () => {
  const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
     <div>
      <Header></Header>
      <div>
        <button
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2>
            Blogs on <span>#{category}</span>
        </h2>
      </div>
    </div>
      
      
    </div>
  )
}

export default CategoryPage
