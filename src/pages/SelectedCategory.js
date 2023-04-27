import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Topic from '../components/UI/Topic'
import { setSelectedCategory } from '../store/CategorySlice'
import { app_name, CATEGORIES_PATH, HOME_PATH } from '../utils/consts'
import '../css/selected_category.css'

function SelectedCategory() {

  const {catId} = useParams()
  const dispatch = useDispatch()
  const selectedCategory = useSelector(state => state.cats.selectedCategory)
  const selectedLoading = useSelector(state => state.cats.selectedLoading)
  const selectedCatExits = useSelector(state => state.cats.selectedCatExits)
  const pages = useSelector(state => state.cats.selectedCatPages)

  const navigate = useNavigate()

  useEffect(() => {
    document.title = `${app_name}${selectedCategory.title}`
    dispatch(setSelectedCategory(Number(catId)))
    console.log(pages)
  }, [dispatch, catId, pages, selectedCategory.title])

  if(!selectedCatExits) {
    navigate(HOME_PATH)
  }

  return (
    <div className="content">
        <div className="selected_category">
            <div className="wrapper">
                <div className="selected_category_content">
                    <Topic title={`Категория: ${selectedCategory.title}`}></Topic>
                    {selectedLoading ? <Topic title={'Загрузка...'}></Topic> :
                    <Pagination toys={selectedCategory.toys} pageCount={pages} path={`${CATEGORIES_PATH}/${selectedCategory.id}`}></Pagination>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectedCategory