import { FC, useCallback, useEffect } from 'react'
import closeIcon from '../../assets/close.svg'
import styles from './Modal.module.scss'

interface ModalProps {
	setIsModalOpen: (value: boolean) => void
	topicText: string
}

type TopicData = {
	id: number
	topics: string[]
}

const topicsData: TopicData[] = [
	{
		id: 1,
		topics: [
			'Что такое PostgreSQL и кем эта СУБД используется в работе.',
			'Основные преимущества PostgreSQL для разработчиков.',
			'DBeaver – инструмент управления PostgreSQL с открытым исходным кодом.',
			'Доступ к БД через CLI',
		],
	},
]

const Modal: FC<ModalProps> = ({ setIsModalOpen, topicText }) => {
	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false)
	}, [setIsModalOpen])

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleCloseModal()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => document.removeEventListener('keydown', handleEscape)
	}, [handleCloseModal])

	return (
		<div className={styles.modal}>
			<div className={styles.modal__container}>
				<h1>
					{topicText.length > 20 ? topicText.slice(0, 30) + '..' : topicText}
				</h1>
				<div className={styles.modal__list}>
					<ul>
						{topicsData[0].topics.map((topic, index) => (
							<li key={index}>
								<p>{topic}</p>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.modal__close} onClick={handleCloseModal}>
					<img src={closeIcon} alt='close' />
				</div>
			</div>
		</div>
	)
}

export default Modal
