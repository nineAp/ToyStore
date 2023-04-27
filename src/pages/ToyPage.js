import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSingleToy } from '../store/ToySlice'
import { useNavigate, useParams } from 'react-router-dom'
import Topic from '../components/UI/Topic'
import {addToy} from '../store/CartSlice'
import '../css/toy_page.css'
import { app_name, HOME_PATH } from '../utils/consts'
import ImageModal from '../components/ImageModal'

function ToyPage() {

    const dispatch = useDispatch()
    const toy = useSelector(state => state.toys.toy)
    const loading = useSelector(state => state.toys.singleToyLoading)
    const singleToyExist = useSelector(state => state.toys.singleToyExist)
    const {toyId} = useParams()
    const cartToys = useSelector(state => state.cart.cartToys)
    const inCart = cartToys.some(cartToy => cartToy.id === toy.id)

    const navigate = useNavigate()

    const [image, setImage] = useState('')
    const [show, setShow] = useState(false)

    const close = () => {
        setShow(false)
    }

    const open = () => {
        if(image === ''){
            setImage(toy.image[0].src)
        }
        setShow(true)
    }

    useEffect(() => {
        document.title = `${app_name}${toy.title}`
        window.scrollTo(0, 0)
        dispatch(setSingleToy(toyId))
        setImage('')
    }, [dispatch, toyId, toy.title])

    if(!singleToyExist){
        navigate(HOME_PATH)
    }


  return (
    <div className="content">
        <div className="toy_page">
            <div className="wrapper">
                <div className="toy_page_content">
                    {loading ? <Topic title={'Загрузка...'}></Topic>
                    :
                    <>
                    <div className="left_toy_page_content">
                        <Topic title={toy.title}></Topic>
                        <img src={image === '' ? toy.image[0].src : image} alt="" className='toy_img' onClick={() => open()}/>
                        <div className="toy_images">
                        {toy.image.map((img) =>
                            <img src={img.src} onClick={() => setImage(img.src)} alt=''/>
                        )}
                        </div>
                    </div>
                    <div className="right_toy_page_content">
                        <Topic title={'Описание:'}></Topic>
                        <p>{toy.description}</p>
                        <h2>Цена: {toy.price}₽</h2>
                        {inCart 
                        ? 
                        <Topic title={'Игрушка в корзине'}></Topic> 
                        :
                        <button className='navigate_btn' onClick={() => dispatch(addToy(toy))}>Добавить в корзину</button> 
                        }
                    </div>
                    </>
                    }
                </div>
            </div>
        </div>
        <ImageModal title={toy.title} src={image} show={show} close={close}></ImageModal>
    </div>
  )
}

export default ToyPage