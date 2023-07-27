import React from 'react'
import { Layout } from '../layout'

import styles from './Home.module.scss'
import { navLinks } from '../layout/header/Header'
import { MainContent } from '../mainContent/MainContent'

const buttons = [
  {
    id: '12ynm',
    label: 'Потолки'
  },
  {
    id: '21fds',
    label: 'Потолки'
  },
  {
    id: 'sds112',
    label: 'Потолки'
  },
  {
    id: 'asda1',
    label: 'Потолки'
  },
]

const Home = () => {
  return (
    <>
        <Layout title={''} id={0} path={''}>
        <MainContent />
          
            <div className={styles.Home} > 
                {buttons.map(({ id, label }) => (
                  <div key={id} className={styles.Home_block}>
                    <p>{label}</p>
                  </div>
                ))}
            </div>
        </Layout>
    </>
  )
}

export default Home 