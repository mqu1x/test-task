import ImgSection4 from '../../assets/img-section4.svg'
import styles from './Section4.module.scss'

const Section4 = () => {
	return (
		<section className={styles.section4}>
			<div className={styles.section4__container}>
				<div className={styles.section4__card__container}>
					<div className={styles.section4__card}>
						<h3>Интенсив на</h3>
						<h2>16 часов + 3 часа на обратную связь</h2>
						<p>
							2 дня по 8 часов <b>теории и практики</b>
						</p>
						<div className={styles.section4__card__days}>
							<h3>Дни обучения</h3>
							<h2>Суббота и воскресенье</h2>
						</div>
						<div className={styles.section4__card__group}>
							<h3>Группа до</h3>
							<h2>15 человек</h2>
						</div>
						<div className={styles.section4__card__cost}>
							<h3>Стоимость за одного человека</h3>
							<h2>7500 руб</h2>
						</div>
						<div className={styles.section4__card__start}>
							<p>
								<b>Старт 1 группы:</b> <span>16 марта</span> занятия проходят
								очно
							</p>

							<p>
								<b>Старт 2 группы:</b> <span>6 апреля</span> занятия проходят
								очно
							</p>
						</div>
						<button>ХОЧУ НА ИНТЕНСИВ</button>
					</div>
					<div className={styles.section4__img}>
						<img src={ImgSection4} alt='img-section4' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section4
