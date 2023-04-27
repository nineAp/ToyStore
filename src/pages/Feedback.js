import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Topic from '../components/UI/Topic'
import { setFeedbacks } from '../store/FeedbackSlice'
import '../css/feedback_page.css'
import FeedbackService from '../APIServices/FeedbackService'
import { app_name } from '../utils/consts'

function Feedback() {

  const dispatch = useDispatch()
  const feedbacks = useSelector(state => state.feedback.feedbacks)
  const loading = useSelector(state => state.feedback.loading)

  const title = useRef()
  const description = useRef()
  const email = useRef()

  useEffect(() => {
    document.title = `${app_name}Отзывы`
    window.scrollTo(0, 0)
    dispatch(setFeedbacks())
  }, [dispatch])


  async function createFeedback() {
    if(title.current.value !== '' && description.current.value !== '' && email.current.value !== '') {
      const data = {
        title: title.current.value,
        description: description.current.value,
        email: email.current.value
      }
      await FeedbackService.createFeedback(data)
    }
  }

  return (
    <div className="content">
      <div className="feedback_page">
        <div className="wrapper">
          <div className="feedback_page_content">
              <Topic title={'Отзывы наших клиентов'}></Topic>
              {loading 
              ? 
              <Topic title={'Загрузка...'}></Topic> 
              :
              feedbacks.length !== 0 ?
              feedbacks.map((fb, index) =>
               index > feedbacks.length - 4 ? 
                <div className="feedback_card" key={fb.id}>
                  <h1>{fb.title}</h1>
                  <p>{fb.description}</p>
                </div>
                :
                null
              )
              :
              <Topic title={'Пока отзывов нет, оставьте отзыв первым :)'}></Topic>
              }
              <div className="feedback_form">
                <Topic title={'Оставьте ваш отзыв!'}></Topic>
                <input type="text" placeholder='Заголовок' ref={title}/>
                <input type="text" placeholder='E-mail' ref={email}/>
                <textarea type="text" placeholder='Чем вы хотите поделиться? Какие есть предложения?' ref={description}/>
                <button className='navigate_btn' onClick={() => createFeedback()}>Отправить</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback