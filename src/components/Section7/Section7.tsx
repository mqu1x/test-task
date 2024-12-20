import React, { useState } from 'react'
import { Input } from '../../shared/Input/Input'
import styles from './Section7.module.scss'

const Section7 = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		date: '',
		sqlKnowledge: '',
		postgresql: '',
		mysql: '',
		mssql: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	// TODO: сделать более гибкий вариант
	const minKnowledge = ['PostgreSQL', 'MySQL', 'MSSQL']

	return (
		<div className={styles.section7}>
			<h2>Запись на интенсив</h2>
			<div className={styles.section7__form}>
				<form>
					<div className={styles.section7__form__contacts}>
						<Input />
						<Input />
					</div>
					<div className={styles.section7__form__date}>
						<label>Дата интенсива</label>
						<div className={styles.section7__form__date__items}>
							<label>
								<input
									type='checkbox'
									name='date'
									value='16 марта 2024'
									onChange={handleChange}
								/>
								16 марта 2024
							</label>
							<label>
								<input
									type='checkbox'
									name='date'
									value='6 апреля 2024'
									onChange={handleChange}
								/>
								6 апреля 2024
							</label>
						</div>
					</div>
					<div className={styles.section7__form__sqlKnowledge}>
						<label>Общие сведения о SQL базах данных</label>
						<div className={styles.section7__form__sqlKnowledge__items}>
							<label>
								<input
									type='checkbox'
									name='sqlKnowledge'
									value='Да'
									onChange={handleChange}
								/>
								Да
							</label>
							<label>
								<input
									type='checkbox'
									name='sqlKnowledge'
									value='Нет'
									onChange={handleChange}
								/>
								Нет
							</label>
						</div>
					</div>
					<div className={styles.section7__form__minKnowledge}>
						<label>Минимальные знания по любому из продуктов</label>
						<div className={styles.section7__form__minKnowledge__items}>
							{minKnowledge.map((item, index) => (
								<div
									key={index}
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '10px',
									}}
								>
									<label>{item}</label>
									<label>
										<input type='checkbox' value='Да' onChange={handleChange} />
										Да
									</label>
									<label>
										<input
											type='checkbox'
											value='Нет'
											onChange={handleChange}
										/>
										Нет
									</label>
								</div>
							))}
						</div>
					</div>
					<button className={styles.section7__form__button} type='submit'>
						Записаться на курс
					</button>
				</form>
			</div>
			<p>
				Занятия проходят по адресу: г. Москва, ул. Вильгельма Пика д.4, с.8
				(площадка Детского Технопарка РГСУ) Ближайшее м. ВДНХ, м. Ботанический
				сад
			</p>
			<div className={styles.section7__address}>
				<p>
					Контакты: <a href='tel:89153220056'>8-915-322-00-56</a>
				</p>
				<p>
					В телеграм:
					<a href='https://t.me/PythonCats' target='_blank'>
						@PythonCats
					</a>
				</p>
			</div>

			<div className={styles.section7__line}></div>
		</div>
	)
}

export default Section7
