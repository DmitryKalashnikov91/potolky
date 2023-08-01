import styles from './Advantages.module.scss'

const Advantages = () => {
  return (
    <section className={styles.Advantages}>
        <div className={styles.Advantages_wrapper}>
            <div className={styles.Advantages_content}>
                <div className={styles.Advantages_content__item}>
                <i className="bi bi-hand-thumbs-up text-5xl text-amber-400"></i>
                    <p>Полноценная гарантия</p>
                </div>
                <div className={styles.Advantages_content__item}>
                    <i className="bi bi-gift text-5xl text-amber-400"></i>
                    <p>Сезонные и праздничные скидки</p>
                </div>
                <div className={styles.Advantages_content__item}>
                    <i className="bi bi-gem text-5xl text-amber-400"></i>
                    <p>Индивидуальные условия</p>
                </div>
                <div className={styles.Advantages_content__item}>
                    <i className="bi bi-cash-coin text-5xl text-amber-400"></i>
                    <p>Кредит и рассрочка</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Advantages