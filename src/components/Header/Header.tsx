import { useEffect, useState } from 'react'
import logo from '../../assets/logo-a-shadow.svg'
import styles from './Header.module.scss'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const navItems = [
		'О курсе',
		'Время и стоимость',
		'Адрес',
		'Модули',
		'Финальный проект',
		'Регистрация',
	]

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isMenuOpen])

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<nav className={styles.header__nav}>
					<a href='/' className={styles.header__logo}>
						<img src={logo} alt='ANNCOM logo' />
						<h3 className={styles.header__logo__title}>ANNCOM</h3>
					</a>
					<div
						className={`${styles.header__menu} ${
							isMenuOpen ? styles.active : ''
						}`}
					>
						<ul>
							<div className={styles.header__menu__list}>
								{navItems.map((item, index) => (
									<li key={index} className={styles.header__menu__item}>
										<a href='#'>{item}</a>
									</li>
								))}
							</div>
						</ul>
					</div>

					<div
						className={`${styles.header__burger} ${
							isMenuOpen ? styles.active : ''
						}`}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
