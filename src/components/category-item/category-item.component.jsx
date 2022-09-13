// import React from "react";
import './category-item.style.scss'

const CategoryItem = ({Category}) => {

  
  const {title,imageUrl} = Category;
  return (
    
      <div className='category-container'>
        <div
        className='background-image' 
        style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    
  )
  
}

export default CategoryItem;