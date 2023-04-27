import React from 'react'
import '../css/toycard.css'
import { useDispatch, useSelector } from 'react-redux'
import {addToy} from '../store/CartSlice'
import { useNavigate } from 'react-router-dom'
import { TOYS_PATH } from '../utils/consts'

function ToyCard({toy}) {


  const dispatch = useDispatch()
  const cartToys = useSelector(state => state.cart.cartToys)
  const inCart = cartToys.some(cartToy => cartToy.id === toy.id)
  const navigate = useNavigate()

  return (
    <div className="toy_card">
        <img src={toy.image[0].src} alt="" />
        <h2>{toy.title}</h2>
        <h4>Цена: {toy.price}₽</h4>
        {inCart ? <h2>Игрушка в корзине</h2> :
        <button onClick={() => dispatch(addToy(toy))}>Добавить в корзину</button>
        }
        <button onClick={() => navigate(`${TOYS_PATH}/${toy.id}`)}>Открыть страницу</button>
    </div>
  )
}

export default ToyCard