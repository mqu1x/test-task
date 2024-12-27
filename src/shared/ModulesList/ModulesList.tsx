import { useState } from 'react'
import arrowImg from '../../assets/arrow.svg'
import Modal from '../Modal/Modal'
import styles from './ModulesList.module.scss'

const ModulesList = () => {
	type Modules = {
		title: string
		description: string
		topics: string[]
	}

	const modules: Modules[] = [
		{
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
			title: 'Третий день',
			description: '3 часа',
			topics: ['Обратная связь;', 'Разбор вопросов;', 'Консультирование.'],
		},
	]

	const [modulesState, setModulesState] = useState({
		isModalOpen: false,
		topic: '',
	})

	const handleOpenModal = (topic: string) => {
		setModulesState({
			isModalOpen: !modulesState.isModalOpen,
			topic: topic,
		})
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
								{day.topics.map((topic, i) =>
									day.title === 'Третий день' ? (
										<li key={i}>
											<p>
												{i + 1}. {topic}
											</p>
										</li>
									) : (
										<div
											key={i}
											className={styles.modulesList__day__topics__item}
										>
											<li onClick={() => handleOpenModal(topic)}>
												<p>
													{i + 1}. {topic}
												</p>
											</li>
											<img src={arrowImg} alt='arrow' />
										</div>
									)
								)}
							</ol>
						</div>
					</div>
				</div>
			))}

			{modulesState.isModalOpen && (
				<Modal
					setIsModalOpen={value =>
						setModulesState(prev => ({ ...prev, isModalOpen: value }))
					}
					topicText={modulesState.topic}
				/>
			)}
		</div>
	)
}

export default ModulesList
