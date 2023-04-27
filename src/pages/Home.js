import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setToys} from '../store/ToySlice'
import { setCategory } from '../store/CategorySlice'
import Topic from '../components/UI/Topic'
import ToyCard from '../components/ToyCard'
import '../css/home.css'
import CategoryCard from '../components/CategoryCard'
import NavigateButton from '../components/UI/NavigateButton'
import { app_name, CATEGORIES_PATH, TOYS_PATH } from '../utils/consts'

function Home() {

  const toys = useSelector(state => state.toys.toys)
  const loading = useSelector(state => state.toys.loading)
  const categories = useSelector(state => state.cats.categories)
  const loadingCategories = useSelector(state => state.cats.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `${app_name}Главная`
    window.scrollTo(0, 0)
    dispatch(setToys())
    dispatch(setCategory())
  }, [dispatch])

  return (
    <div className="content">
      <div className="home">
        <div className="wrapper">
          <div className="home_content">
            <div className="categories_block">
              <Topic title='Категории месяца'></Topic>
              <div className="categories_cards">
                {loadingCategories 
                ? 
                <Topic title={'Загрузка'}></Topic> 
                : 
                categories.map((category, index) =>
                  index < 3 ?
                  <CategoryCard key={category.id} category={category}></CategoryCard>
                  :
                  null
                )
                }
              </div>
              <NavigateButton title={'Открыть все категории'} path={CATEGORIES_PATH}></NavigateButton>
            </div>
            <div className="toys_block">
              <Topic title='Игрушки месяца'></Topic>
              <div className="toys_cards">
                {loading 
                ? 
                <Topic title={'Загрузка...'}></Topic> 
                : 
                toys.map((toy, index) =>
                  index < 8 ?
                  <ToyCard key={toy.id} toy={toy}></ToyCard>
                  :
                  null
                )
                }
              </div>
              <NavigateButton title={'Посмотреть все игрушки'} path={`${TOYS_PATH}/pages/1`}></NavigateButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home