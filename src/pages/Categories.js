import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from '../components/CategoryCard'
import Topic from '../components/UI/Topic'
import '../css/categories.css'
import { setCategory } from '../store/CategorySlice'
import { app_name } from '../utils/consts'

function Categories() {

  const dispatch = useDispatch()
  const categories = useSelector(state => state.cats.categories)
  const loading = useSelector(state => state.cats.loading)

  useEffect(() => {
    document.title = `${app_name}Категории`
    window.scrollTo(0, 0)
    dispatch(setCategory())
  }, [dispatch])

  return (
    <div className="content">
      <div className="categories">
        <div className="wrapper">
          <div className="categories_content">
              <Topic title={'Все категории'}></Topic>
              {loading ? <Topic title={'Загрузка...'}></Topic> :
              <div className="categories_cards">
                {categories.map((category) =>
                  <CategoryCard category={category} key={category.id}></CategoryCard>
                )}
              </div>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories