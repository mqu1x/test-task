import imgSection2 from '../../assets/img-section2.svg'
import styles from './Section2.module.scss'

const Section2 = () => {
	return (
		<div className={styles.section2}>
			<div className={styles.section2__container}>
				<div className=''>
					<img src={imgSection2} alt='section2-img' />
				</div>

				<div className={styles.section2__text}>
					<p>
						<b>PostgreSQL</b> – свободная кроссплатформенная система управления
						базами данных. Ориентирована на широкий круг решаемых задач. Входит
						в число лидеров среди реляционных СУБД.
					</p>
					<br />
					<p>
						<b>Изучение SQL</b> это один из способов попробовать себя в качестве
						бэкенд-разработчика (backend developer) или разработчика приложений.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Section2
