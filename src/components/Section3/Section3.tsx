import imgSection3 from '../../assets/img-section3.svg'
import styles from './Section3.module.scss'

const Section3 = () => {
	const content = [
		'устройство PostgreSQL и важнейшие приёмы её администрирования, от программирования до оптимизации',
		'конфигурации безопасности при разработке web-приложений',
		'архитектура СУБД',
		'структуры в организации данных',
	]
	return (
		<section className={styles.section3}>
			<div className={styles.section3__container}>
				{/* TODO: один h1 на странице */}
				<h1>Цель курса – освоение работы с базами данных.</h1>

				<div className={styles.left__side}>
					<ul>
						{content.map((item, index) => (
							<li key={index}>
								<p>
									{index === 0 ? (
										<>
											устройство PostgreSQL и важнейшие приёмы её
											администрирования,
											<b>от программирования до оптимизации</b>
										</>
									) : (
										item
									)}
								</p>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.right__side}>
					<img src={imgSection3} alt='Laptop with database visualizations' />
				</div>

				<p className={styles.bottom__text}>
					<b>
						Вы научитесь писать сложные запросы к базам данных, используя один
						из востребованных языков программирования - SQL и СУБД PostgreSQL.
					</b>
				</p>
			</div>
		</section>
	)
}

export default Section3
