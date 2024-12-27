import { ChangeEvent, FormEvent, useState } from 'react'
import Checkbox from '../../shared/Checkbox/Checkbox'
import { Input } from '../../shared/Input/Input'
import Footer from '../Footer/Footer'
import styles from './Section7.module.scss'

interface FormData {
	name: string
	phone: string
	sqlKnowledge: string
	selected: string | null
}

const Section7 = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		sqlKnowledge: '',
		selected: null,
	})

	const [checkboxGroups, setCheckboxGroups] = useState({
		intensiveDate: null as string | null,
		sqlKnowledge: null as string | null,
		minKnowledge: {} as Record<string, string | null>,
	})

	const handleSingleCheckboxChange = (group: string, value: string) => {
		setCheckboxGroups(prev => ({
			...prev,
			[group]: prev[group] === value ? null : value,
		}))
	}

	const handleMinKnowledgeChange = (product: string, value: string) => {
		setCheckboxGroups(prev => ({
			...prev,
			minKnowledge: {
				...prev.minKnowledge,
				[product]: prev.minKnowledge[product] === value ? null : value,
			},
		}))
	}

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		console.log({ formData, checkboxGroups })
	}

	const minKnowledge: string[] = ['PostgreSQL', 'MySQL', 'MSSQL']

	return (
		<div className={styles.section7}>
			<div className={styles.section7__content}>
				<div className={styles.section7__container}>
					<div className={styles.section7__title}>
						<h1>Запись на интенсив</h1>
					</div>
					<div className={styles.section7__intesive_reg}>
						<div className={styles.section7__form}>
							<form
								onSubmit={handleSubmit}
								className={styles.section7__form__content}
							>
								<div className={styles.section7__form__contacts}>
									<Input
										label='Имя'
										placeholder='Иван'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
									/>
									<Input
										label='Телефон'
										placeholder='+7'
										name='phone'
										value={formData.phone}
										onChange={handleInputChange}
									/>
								</div>
								<div className={styles.section7__form__date}>
									<label>
										<h3>Дата интенсива</h3>
									</label>
									<div className={styles.section7__form__date__items}>
										<Checkbox
											value='16 марта 2024'
											isChecked={
												checkboxGroups.intensiveDate === '16 марта 2024'
											}
											onChange={() =>
												handleSingleCheckboxChange(
													'intensiveDate',
													'16 марта 2024'
												)
											}
										/>
										<Checkbox
											value='6 апреля 2024'
											isChecked={
												checkboxGroups.intensiveDate === '6 апреля 2024'
											}
											onChange={() =>
												handleSingleCheckboxChange(
													'intensiveDate',
													'6 апреля 2024'
												)
											}
										/>
									</div>
								</div>
								<div className={styles.section7__form__sqlKnowledge}>
									<label>
										<h3>Общие сведения о SQL базах данных</h3>
									</label>
									<div className={styles.section7__form__sqlKnowledge__items}>
										<Checkbox
											value='Да'
											isChecked={checkboxGroups.sqlKnowledge === 'Да'}
											onChange={() =>
												handleSingleCheckboxChange('sqlKnowledge', 'Да')
											}
										/>
										<Checkbox
											value='Нет'
											isChecked={checkboxGroups.sqlKnowledge === 'Нет'}
											onChange={() =>
												handleSingleCheckboxChange('sqlKnowledge', 'Нет')
											}
										/>
									</div>
								</div>
								<div className={styles.section7__form__minKnowledge}>
									<label>
										<h3>Минимальные знания по любому из продуктов</h3>
									</label>
									<div className={styles.section7__form__minKnowledge__items}>
										{minKnowledge.map((item, index) => (
											<div
												key={index}
												className={
													styles.section7__form__minKnowledge__items__item
												}
											>
												<label>
													<h3>{item}</h3>
												</label>
												<label>
													<Checkbox
														value='Да'
														isChecked={
															checkboxGroups.minKnowledge[item] === 'Да'
														}
														onChange={() =>
															handleMinKnowledgeChange(item, 'Да')
														}
													/>
												</label>
												<label>
													<Checkbox
														value='Нет'
														isChecked={
															checkboxGroups.minKnowledge[item] === 'Нет'
														}
														onChange={() =>
															handleMinKnowledgeChange(item, 'Нет')
														}
													/>
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
							<span>Занятия проходят по адресу:</span> г. Москва, ул. Вильгельма
							Пика д.4, с.8 (площадка Детского Технопарка РГСУ) Ближайшее м.
							ВДНХ, м. Ботанический сад
						</p>
						<br />
						<br />
						<div className={styles.section7__address}>
							<p>
								<span>Контакты:</span>{' '}
								<a href='tel:89153220056'>8-915-322-00-56</a>
							</p>
							<p>
								<span>В телеграм:</span>{' '}
								<a href='https://t.me/PythonCats' target='_blank'>
									@PythonCats
								</a>
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Section7
