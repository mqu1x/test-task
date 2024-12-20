import { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './ModulesList.module.scss'

const ModulesList = () => {
	const modules = [
		{
			id: 1,
			title: 'Первый день',
			description: '4 часа теории + 4 часа практики',
			topics: [
				'Базовые инструменты работы с PostgreSQL',
				'Общее устройство и архитектура СУБД',
				'Логическая и физическая структуры в организации данных',
				'Основные знания и умения в отношении языка программирования запросов SQL, включая функции, составные типы и процедуры',
			],
		},
		{
			id: 2,
			title: 'Второй день',
			description: '4 часа теории + 4 часа практики',
			topics: [
				'PostgreSQL и все, что с данной СУБД связано – от принципов программирования до оптимизации; посредством конфигурирования настроек',
				'Правила ограничения ипредоставления доступа к СУБД',
				'Логические принципы резервного копирования',
				'Уязвимости',
			],
		},
		{
			id: 3,
			title: 'Третий день',
			description: '3 часа',
			topics: ['Обратная связь', 'Разбор вопросов', 'Консультирование'],
		},
	]

	// TODO: 3 модуль сделать через SCSS
	// TODO: вынести так же кнопку в одтельный компонент
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [topic, setTopic] = useState('')

	const handleOpenModal = (topic: string) => {
		setIsModalOpen(true)
		setTopic(topic)
	}

	return (
		<div className={styles.modulesList}>
			{modules.map((day, index) => (
				<div key={index} className={styles.modulesList__day}>
					<div className={styles.modulesList__day__header}>
						<h3>{day.title}</h3>
						<p>{day.description}</p>
					</div>
					<div className={styles.modulesList__day__topics__container}>
						<div className={styles.modulesList__day__topics}>
							<ol>
								{day.topics.map((topic, id) => (
									<div
										key={id}
										className={styles.modulesList__day__topics__item}
									>
										<li onClick={() => handleOpenModal(topic)}>
											<p>{topic}</p>
										</li>
									</div>
								))}
							</ol>
						</div>
					</div>
				</div>
			))}

			{/* TODO: убрать нижнюю границу у 3 модуля */}

			{isModalOpen && (
				<Modal setIsModalOpen={setIsModalOpen} topicText={topic} />
			)}
		</div>
	)
}

export default ModulesList
