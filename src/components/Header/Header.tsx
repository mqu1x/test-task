import logo from '../../assets/logo-a-shadow.svg'
import styles from './Header.module.scss'

const Header = () => {
	const navItems = [
		'О курсе',
		'Время и стоимость',
		'Адрес',
		'Модули',
		'Финальный проект',
		'Регистрация',
	]

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<nav className={styles.header__nav}>
					<a href='/' className={styles.header__logo}>
						<img src={logo} alt='ANNCOM logo' />
						<h3 className={styles.header__logo__title}>ANNCOM</h3>
					</a>
					<div className={styles.header__menu}>
						<ul className={styles.header__menu__list}>
							{navItems.map((item, index) => (
								<li key={index} className={styles.header__menu__item}>
									<a href='#'>{item}</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
