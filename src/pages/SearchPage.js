import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ToyCard from '../components/ToyCard'
import Topic from '../components/UI/Topic'
import { setToys } from '../store/ToySlice'
import '../css/search_page.css'
import { app_name } from '../utils/consts'

function SearchPage() {

  const allToys = useSelector(state => state.toys.toys)
  const allToysLoading = useSelector(state => state.toys.loading)
  const {searchRequest} = useParams()
  const filtredToys = allToys.filter(toy => toy.title.toLowerCase().includes(searchRequest.toLowerCase()))
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `${app_name}Поиск по ${searchRequest}`
    window.scrollTo(0, 0)
    dispatch(setToys())
  }, [dispatch, searchRequest])

  return (
    <div className="content">
      <div className="search_page">
        <div className="wrapper">
          <div className="search_content">
            <Topic title={`Результат поиска по запросу: ${searchRequest}`}></Topic>
            {allToysLoading 
            ? 
            <Topic title={'Загрузка...'}></Topic>
            : 
            filtredToys.length === 0 ? <Topic title={'Ничего не найдено'}></Topic> :
              <div className="toys_cards">
                {filtredToys.map((toy) => 
                  <ToyCard key={toy.id} toy={toy}></ToyCard>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage