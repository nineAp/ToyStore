import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/categorycards.css'
import { CATEGORIES_PATH } from '../utils/consts'

function CategoryCard({category}) {
  const navigate = useNavigate()
  return (
    <div className="category_card" onClick={() => navigate(`${CATEGORIES_PATH}/${category.id}/pages/1`)}>
        <h1>{category.title}</h1>
        <h2>Количество товаров: {category.toys.length}</h2>
    </div>
  )
}

export default CategoryCard