import closeIcon from '../../assets/close.svg'
import styles from './Modal.module.scss'

export default function Modal({
	setIsModalOpen,
	topicText,
}: {
	setIsModalOpen: (value: boolean) => void
	topicText: string
}) {
	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modal__container}>
				<h1>
					{topicText.length > 50 ? topicText.slice(0, 50) + '...' : topicText}
				</h1>
				<p>still in development)</p>
				<div className={styles.modal__close} onClick={handleCloseModal}>
					<img src={closeIcon} alt='close' />
				</div>
			</div>
		</div>
	)
}
