import React, { useEffect } from 'react'
import Topic from '../components/UI/Topic'
import { app_name } from '../utils/consts'

function About() {

  useEffect(() => {
    document.title = `${app_name}О нас`
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="content">
      <div className="about">
        <div className="wrapper">
          <div className="about_content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px'}}>
            <Topic title={'О нас'}></Topic>
            <p>TOY-LAND – это:<br/>
              • Федеральная розничная сеть магазинов детских игрушек, которая насчитывает 71 магазин по России — от Санкт-Петербурга до Владивостока.<br/>

              • В этом году TOY-LAND в третий раз подряд получает премию Retailer of the Year Russia.
              Компания стала победителем в главных номинациях: «Лучший сетевой магазин России» и«Лучший интернет- магазин России»,
                а также «Лучший сетевой магазин года 2020-2022» и «Лучший онлайн-магазин года 2020-2022» в категории «Дети».<br/>

              • Магазин, в ассортимент которого входят такие бренды, как: L.O.L. Surprise, LEGO, Bey Blade, NERF, Barbie, Enchantimals,
              Hot Wheels, Hatchimals, Zapf Creation, Poopsie Surprise Unicorn, Smart Egg,Paw Patrol и другие.<br/>

              У нас представлен большой и разнообразный ассортимент игрушек по очень выгодным ценам.
              Знаменитые на весь мир конструкторы LEGO , невероятно популярные очаровательные куколки L.O.L. Surprise,
                спрятанные в многослойный шарик-сюрприз, игрушки, созданные по сюжетам лю- бимых мультфильмов: «Черепашки Ниндзя»,
                «Рев и заводная команда», «Щенячий патруль», «То- бот». Куклы «Принцессы Диснея», «Сказочный патруль»; интерактивные куклы Беби Борн.
                  Мягкие игрушки Aurora, Disney, модели машинок Welly, самые разнообразные наборы для творчества , PLAY-DOH, бластеры Nerf, электромобили Peg-Perego,
                  игрушки и наборы для малышей Fisher-Price и Mega Bloks , товары для игры на свежем воздухе от Little Tikes и даже множество самых разно - образных аксессуаров для праздника ,
                    которые помогут Вам устроить настоящую вечеринку для юных любителей приключений.<br/>

              Центр обслуживания клиентов: 8 (495) 215-22-44(круглосуточно).<br/>
              Е-mail: toyland@mail.ru<br/>

              Продажа товаров в интернет-магазине TOY.RU осуществляется Обществом с ограниченной ответственностью «ТOY-LAND»<br/>
              Юридический адрес: 109428, г. Владивосток, ул. Русская, д. 21, пом. 207.2 оф. 0308.<br/>
              ИНН/КПП 5036155945/772101001</p>
            <Topic title={'Контакты'}></Topic>
            <p>Телефон: 8 (495) 215-22-44<br/>
            Зарегистрированный юридический адрес : 690013, г. Владивосток, ул. Шепеткова, д. 60, оф. 4187.<br/>
        ИНН/КПП 5036155945/772101001</p>
            <Topic title={'Где мы находимся?'}></Topic>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.04279302334146!2d131.94128390975732
				!3d43.11833403019689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3925e3a91479f%
				3A0x73964df3eec213aa!2z0JLQu9Cw0LTQuNCy0L7RgdGC0L7QutGB0LrQuNC5INGB0YPQtNC-0YHRgtGA0L7QuNGC0LXQu
				9GM0L3Ri9C5INC60L7Qu9C70LXQtNC2INC40LwuINCe0LvQtdCz0LAg0JfQtdGA0L7QstCw!5e0!3m2!1sru!2sru!4v1637482869031!5m2!1sru!2sru"
				 height="600" style={{border: '0', width: '100%'}} allowfullscreen="" loading="lazy"></iframe>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About