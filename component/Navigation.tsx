import React from 'react'
import Image from 'next/image'
import style from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav>
        <ul className={style.navbar}>
            <li className={style.logo}>
                <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343.25 360.98"><defs><style>.cls-1{"fill:#231f20;"}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path className="cls-1" d="M341.11,116.2h-90.8s-12-76.59-115.23-62.72L134.34,0A187.36,187.36,0,0,0,0,142.57S66,97.85,106.31,95.71v27.21s60.53,4,61.45,71.24l10.39,10.7s-5.91,52.06-83.77,56.25C55,263.23,26.73,282.25,26.3,282.54A187.33,187.33,0,0,0,133.35,361s1.39-92.53,97.69-106.29S351.2,199.66,341.11,116.2Zm-145,2a11,11,0,1,1,11-11A11,11,0,0,1,196.12,118.19Z"/><path className="cls-1" d="M26.3,282.54h0"/><circle className="cls-1" cx="128.91" cy="188.67" r="10.99"/></g></g></svg>
                <h1>Pet<span>hub</span></h1>
            </li>
            <li className={style.navPage}>
                <h2 className={style.active}>Board</h2>
                <h2 className="button">Profile</h2>
            </li>
            <li></li>
        </ul>
    </nav>
  )
}

export default Navigation