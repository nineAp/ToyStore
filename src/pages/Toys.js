import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import Topic from '../components/UI/Topic'
import { app_name, TOYS_PATH } from '../utils/consts'
import { setToys } from '../store/ToySlice'
import '../css/toys_page.css'

function Toys() {

  const dispatch = useDispatch()
  const pages = useSelector(state => state.toys.pages)
  const toys = useSelector(state => state.toys.toys)
  const loading = useSelector(state => state.toys.loading)

  useEffect(() => {
    document.title = `${app_name}Все игрушки`
    dispatch(setToys())
  }, [dispatch])


  return (
    <div className="content">
      <div className="toys">
        <div className="wrapper">
          <div className="toys_content">
            <Topic title={'Все игрушки'}></Topic>
            {loading ? <Topic title={'Загрузка...'}></Topic> :
            <Pagination pageCount={pages} toys={toys} path={TOYS_PATH}></Pagination>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toys