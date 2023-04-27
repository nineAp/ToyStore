import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {createPages} from '../utils/pagesCounter'
import ToyCard from './ToyCard'
import '../css/pagination.css'

function Pagination({toys, pageCount, path}) {

    const {currentPage} = useParams()
    const pages = []
    const navigate = useNavigate()
    createPages(pages, pageCount, Number(currentPage))

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [navigate])
    
  return (
    <>
    <div className="toys_cards">
      {toys.map((toy, index) =>
        index >= (currentPage-1)*9 && index < currentPage*9 ?  
        <ToyCard key={toy.id} toy={toy}></ToyCard>
        :
        null
      )}
    </div>
    <div className="pages">
      {pages.map((page) =>
        <span key={page}
         className={page === Number(currentPage) ? 'current_page' : 'page'}
          onClick={() => navigate(`${path}/pages/${page}/`)}>
          {page}
        </span>
      )}
    </div>
    </>
    
  )
}

export default Pagination