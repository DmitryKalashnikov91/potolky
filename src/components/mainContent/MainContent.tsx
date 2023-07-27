import styles from './MainContet.module.scss'
import { Caveat } from 'next/font/google';
const caveat = Caveat({ subsets: ['latin'], weight: ['700'] })

export const MainContent = () => {
  return (
    <>
    <section className={styles.MainContent}>
        <div className={styles.MainContent_title}>
          <div className={styles.MainContent_title__text}>
              <h1 className={caveat.className}>Art-potolky.ru</h1>
              <span>Натяжные потолки и стены <br /></span>
              <p>Художественное оформление любой сложности</p>
          </div>
        </div>
    </section>
  </>
  )
}
