import React from 'react'
import { useDispatch } from 'react-redux'
import {removeToy} from '../store/CartSlice'

function CartToy({toy}) {

    const dispatch = useDispatch()


  return (
    <div className="toy_card">
        <img src={toy.image[0].src} alt="" />
        <h2>{toy.title}</h2>
        <h4>Цена: {toy.price}₽</h4>
        <button onClick={() => dispatch(removeToy(toy))}>Удалить из корзины</button>
    </div>
  )
}

export default CartToy