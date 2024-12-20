import styles from './Input.module.scss'

export const Input = () => {
	return (
		<div className={styles.section7__form__contacts__item}>
			<label>Имя</label>
			<input
				placeholder='Имя'
				type='text'
				name='name'
				// value={formData.name}
				// onChange={handleChange}
			/>
		</div>
	)
}
