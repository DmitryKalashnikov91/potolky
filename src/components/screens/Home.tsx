import React from 'react'
import { Layout } from '../layout'

import styles from './Home.module.scss'
import { navLinks } from '../layout/header/Header'
import { MainContent } from '../mainContent/MainContent'
import Advantages from '../advantages/Advantages'

const buttons = [
  {
    id: '12ynm',
    label: 'Потолки',
    img: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: '21fds',
    label: 'Стены',
    img: 'https://images.unsplash.com/photo-1690382285917-73dfd2a22d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
  },
  {
    id: 'sds112',
    label: 'Освещение',
    img: 'https://plus.unsplash.com/premium_photo-1675433331160-c1986b86673b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 'asda1',
    label: 'Примеры',
    img: 'https://m-files.cdnvideo.ru/lpfile/7/c/f/7cf7f1ed752d1a1672af99c68d14f09d/-/resize/1600/f.jpg?44665505'

  },
]

const Home = () => {
  return (
    <>
        <Layout title={''} id={0} path={''}>
        <MainContent />
          
            <div className={styles.Home} > 
                {buttons.map(({ id, label, img }) => (
                  <div key={id} className={styles.Home_block} style={{backgroundImage: `url(${img})`, backgroundPosition:'center'}}>
                    
                    <button className='py-3 px-10 bg-zinc-400 opacity-80'><p className='text-white'>{label}</p></button>
                  </div>
                ))}
                
            </div>
            <Advantages />
        </Layout>
    </>
  )
}

export default Home 