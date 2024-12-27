import logo from '../../assets/logo.svg'
import technoparkLogo from '../../assets/technopark-logo.svg'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__line}></div>
			<div className={styles.footer__container}>
				<div className={styles.footer__logo}>
					<img src={logo} alt='logo' />
					<img src={technoparkLogo} alt='technopark' />
				</div>
				<div className={styles.footer__info}>
					<p>
						Интенсивный курс «Основы SQL / PostgreSQL» разработал и преподаёт
						индустриальный партнер Технопарка РГСУ Махамашев Руслан, Заведующий
						Лабораторией Мультимедийных Технологий и Виртуальной Реальности,
						разработчик информационных систем по авторским заказам с большим
						опытом и собственной разработкой голосового робота-помощника в
						рамках проектов компании ANNCOM
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
