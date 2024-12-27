import styles from './Section1.module.scss'

import heroImg from '../../assets/hero-img.svg'

const Section1 = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__container_wrapper}>
				<div className={styles.hero__container}>
					<div className={styles.hero__course__card}>
						<h3>Интенсивный курс по освоению работы с базами данных </h3>
						<h1>SQL / PostgreSQL</h1>
						<p>
							Для тех, кто стремится получить новые знания и опыт, повысить свою
							стоимость на рынке, попробовать себя в решении практических задач
							реального бизнеса.
						</p>
						<div className={styles.course__card__button}>
							<button className={styles.card__button__primary}>
								ЗАПИСАТЬСЯ НА КУРС
							</button>
							<button className={styles.card__button__secondary}>
								Смотреть программу
							</button>
						</div>
					</div>
					<div className={styles.hero__img}>
						<img src={heroImg} alt='hero-img' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section1
