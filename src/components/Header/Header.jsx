import React from 'react'
import pict1 from '../../assets/unnamed.png'
import s from './Header.module.css'


const Header = () => {
  return (
    <div>
      <a href="https://department-of-entrepreneurship.vercel.app/">Загрузка</a>

      <a
        className={s.logo}
        href="http://umsf.dp.ua/struktura/2021-03-09-08-36-26/kafedra-pidpryiemnytstva-ta-ekonomiky-pidpryiemstva"
      >
        {<img src={pict1} alt="" className={s.logo_pict} />}
        <h2 className={s.header_logo_main}>
          КАФЕДРА ПІДПРИЄМНИЦТВА, ТОРГІВЛІ ТА ЕКОНОМІКИ ПІДПРИЄМСТВА
        </h2>
      </a>

      <p>Чи можеш бути бізнесменом? </p>
      <p>Чи можеш бути керівником компанії?</p>
    </div>
  );
}

export default Header
