import styles from './Section6.module.scss'

const Section6 = () => {
	const courseOutcomes: string[] = [
		'Понимание различий между PostgreSQL и основными конкурентами',
		'Полностью использовать возможности, предоставляемые PostgreSQL для реализации логики приложения',
		'Необходимый уровень знаний о методах и принципах использования БД при разработке ПО',
		'Понимать внутреннюю организацию сервера',
	]

	console.log(styles)

	return (
		<div className={styles.section6}>
			<div className={styles.section6__container}>
				<div className={styles.section6__content}>
					<h1 className={styles.section6__title}>
						По окончанию курса слушатели смогут
					</h1>
					<ul className={styles.section6__list}>
						{courseOutcomes.map((outcome, index) => (
							<li key={index} className={styles.section6__list__item}>
								<p>{outcome}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Section6
