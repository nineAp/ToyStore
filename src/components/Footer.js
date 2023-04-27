import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/footer.css'
import {HOME_PATH, TOYS_PATH, CATEGORIES_PATH, ABOUT_PATH, FEEDBACK_PATH, CART_PATH} from '../utils/consts'

function Footer() {

  const navigate = useNavigate()

  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer_content">
          <h1 className='logo' onClick={() => navigate(HOME_PATH)}>ToyLand</h1>
          <nav>
            <li className='header_link' onClick={() => navigate(HOME_PATH)}>Главная</li>
            <li className='header_link' onClick={() => navigate(TOYS_PATH  + '/pages/1')}>Игрушки</li>
            <li className='header_link' onClick={() => navigate(CATEGORIES_PATH)}>Категории</li>
            <li className='header_link' onClick={() => navigate(ABOUT_PATH)}>О нас</li>
            <li className='header_link' onClick={() => navigate(FEEDBACK_PATH)}>Отзывы</li>
            <li className='header_link' onClick={() => navigate(CART_PATH)}>Корзина</li>
          </nav>
          <p>
        © 2022 ООО "TOY-LAND"<br/>
        Тел: 8(495) 215-22-44, элкетронная почта: toyland@mail.ru<br/>
        Все права защищены
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer