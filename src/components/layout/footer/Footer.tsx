import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_social}>
          <i className="bi bi-envelope"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-telegram"></i>
          <i className="bi bi-youtube"></i>
      </div>
      <div className={styles.Footer_conf}>
          <h2>ООО "НПО РПС"</h2>
          <p>ИНН/КПП 7737128982/772601001</p>
          <span>
            © ООО "НПО РПС", 2023 г. Сайт не является публичной офертой и носит информационный характер. Все материалы данного сайта являются объектами авторского права (в том числе дизайн). Запрещается копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в Интернете) или любое иное использование информации и объектов без предварительного согласия правообладателя.
          </span>
      </div>
    </footer>
  )
}

