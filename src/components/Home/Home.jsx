import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Home.css'
import ChevronLeft from '../ChevronLeft/ChevronLeft'

const Home = () => {
  const { user, onClose } = useTelegram()
  return (
    <div className='main'>
      <div className='header'>
        <h1>DEVOLEXX,</h1>
        <p className='grayt'>приветствуем вас в Страховке!</p>
      </div>
      <div className='square-scroll'>
        <div className='square' style={{ backgroundColor: '#FF9094' }}>
          Страховки для всех!
        </div>
        <div className='square' style={{ backgroundColor: '#C1ABE0' }}>
          Как начать новую жизнь весной?
        </div>
        <div className='square' style={{ backgroundColor: '#8ECDB0' }}>
          Совкомбанк
        </div>
        <div className='square' style={{ backgroundColor: '#C1ABE0' }}>
          Как начать новую жизнь весной?
        </div>
        <div className='square' style={{ backgroundColor: '#FF9094' }}>
          Совкомбанк
        </div>
      </div>
      <div className='space15' />
      <div className='defaultwrap sb'>
        <div>
          <h2>Мои заявки</h2>
          <p className='grayt'>У вас пока нет активных заявок</p>
        </div>
        <ChevronLeft />
      </div>
      <div className='space15' />
      <div className='defaultwrap'>
        <h2>Купить полис</h2>
      </div>
    </div>
  )
}

export default Home
