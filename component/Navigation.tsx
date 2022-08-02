import React, { useState } from 'react'
import Image from 'next/image'
import style from './Navigation.module.css'
const Navigation = () => {
  const [Active, setActive] = useState(0)

  return (
    <nav>
        <ul className={style.navbar}>
            <li className={style.logo}>
                <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 343.25 360.98"><defs><style>.cls-1{"fill:#231f20;"}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><path className="cls-1" d="M341.11,116.2h-90.8s-12-76.59-115.23-62.72L134.34,0A187.36,187.36,0,0,0,0,142.57S66,97.85,106.31,95.71v27.21s60.53,4,61.45,71.24l10.39,10.7s-5.91,52.06-83.77,56.25C55,263.23,26.73,282.25,26.3,282.54A187.33,187.33,0,0,0,133.35,361s1.39-92.53,97.69-106.29S351.2,199.66,341.11,116.2Zm-145,2a11,11,0,1,1,11-11A11,11,0,0,1,196.12,118.19Z"/><path className="cls-1" d="M26.3,282.54h0"/><circle className="cls-1" cx="128.91" cy="188.67" r="10.99"/></g></g></svg>
                <h1>Pet<span>hub</span></h1>
            </li>
            <li className={style.navPage}>
                <h2 onClick={()=>setActive(0)} className={Active === 0 ? style.active : "button"}>Board</h2>
                <h2 onClick={()=>setActive(1)} className={Active === 1 ? style.active : "button"}>Profile</h2>
                <div className={style.indicator}style={{transform: Active === 0 ? "translateX(-0.4rem)" : "translateX(5.3rem)"}}></div>
            </li>
            <li className={style.user} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation