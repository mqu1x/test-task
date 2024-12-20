import imgSection5 from '../../assets/img-section5.svg'
import ModulesList from '../../shared/ModulesList/ModulesList'
import styles from './Section5.module.scss'

const Section5 = () => {
	return (
		<section className={styles.section5}>
			<div className={styles.section5__container}>
				<div className={styles.section5__container__content}>
					<div className={styles.section5__img}>
						<img src={imgSection5} alt='img-section5' />
					</div>
					<div className={styles.section5__container__text}>
						<h1>Темы модулей</h1>
						<p>
							<b>
								Курс состоит из модулей, которые включают{' '}
								<span>теоретическую</span> и <span>практическую части</span>.{' '}
							</b>
							<br />
							На занятиях рассматриваются инструменты работы с базами данных и
							инструкции их реализации для выполнения заданий.
						</p>

						<p>
							Практика – это задания на самостоятельное выполнение для улучшения
							понимания материала.
						</p>
					</div>
				</div>
				<ModulesList />
			</div>
		</section>
	)
}

export default Section5
