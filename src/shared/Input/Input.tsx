import { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export const Input = (props: InputProps) => {
	return (
		<div className={styles.input}>
			<label>
				<h3>{props.label}</h3>
			</label>
			<input
				placeholder={props.placeholder}
				type='text'
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	)
}
