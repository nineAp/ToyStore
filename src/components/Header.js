import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../css/header.css'
import {HOME_PATH, TOYS_PATH, CATEGORIES_PATH, ABOUT_PATH, FEEDBACK_PATH, CART_PATH, SEARCH_PATH} from '../utils/consts'

function Header() {

  const navigate = useNavigate()
  const toysCount = useSelector(state => state.cart.count)
  const searchRequest = useRef()

  return (
    <div className="header">
      <div className="wrapper">
        <div className="header_content">
          <div className="logo_block">
            <h1 onClick={() => navigate(HOME_PATH)} className='logo'>ToyLand</h1>
            <h4>Магазин детских игрушек</h4>
          </div>
          <nav>
            <li className='header_link' onClick={() => navigate(HOME_PATH)}>Главная</li>
            <li className='header_link' onClick={() => navigate(TOYS_PATH  + '/pages/1')}>Игрушки</li>
            <li className='header_link' onClick={() => navigate(CATEGORIES_PATH)}>Категории</li>
            <li className='header_link' onClick={() => navigate(ABOUT_PATH)}>О нас</li>
            <li className='header_link' onClick={() => navigate(FEEDBACK_PATH)}>Обратная связь</li>
            <div className="cart">
              <li className='header_link' onClick={() => navigate(CART_PATH)}>Корзина</li>
              <div className="cart_counter">
                <h2>{toysCount}</h2>
              </div>
            </div>
          </nav>
        <div className="search_block">
          <input type="text" placeholder='Поиск' className='search_input' ref={searchRequest}/>
          <button className='search_btn' onClick={() => searchRequest.current.value !== '' ? navigate(`${SEARCH_PATH}/${searchRequest.current.value}`) : null}>Искать</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header