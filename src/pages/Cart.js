import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartToy from '../components/CartToy'
import Topic from '../components/UI/Topic'
import '../css/cart.css'
import NavigateButton from '../components/UI/NavigateButton'
import { app_name, HOME_PATH } from '../utils/consts'

function Cart() {

  const cartToys = useSelector(state => state.cart.cartToys)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  
  useEffect(() => {
    document.title = `${app_name}Корзина`
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="content">
      <div className="cart_page">
        <div className="wrapper">
          <div className="cart_content">
            <Topic title={'Корзина'}></Topic>
            {cartToys.length === 0 ?
            <Topic title={'В корзине пусто :('}></Topic>
            :
            <div className="cart_toys_cards">
              {cartToys.map((toy) =>
                <CartToy key={toy.id} toy={toy}></CartToy>
              )}
            </div> 
          }
          <h2>Сумма покупки: {totalPrice}₽</h2>
          <NavigateButton title={'Оформить покупку'} path={HOME_PATH}></NavigateButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart