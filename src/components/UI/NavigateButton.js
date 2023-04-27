import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/navigate_btn.css'

function NavigateButton({title, path}) {

const navigate = useNavigate()

  return (
    <button onClick={() => navigate(path)} className='navigate_btn'>{title}</button>
  )
}

export default NavigateButton