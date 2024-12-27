import styles from './Checkbox.module.scss'

interface CheckboxProps {
	value: string
	isChecked: boolean
	onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, isChecked }) => {
	return (
		<label className={styles.checkbox}>
			<input
				type='checkbox'
				className={styles.checkbox__input}
				onChange={onChange}
				checked={isChecked}
			/>
			<span className={styles.checkbox__span}></span>
			<p>{value}</p>
		</label>
	)
}

export default Checkbox
