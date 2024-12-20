import styles from './Section6.module.scss'

const Section6 = () => {
	const courseOutcomes = [
		'Понимание различий между PostgreSQL и основными конкурентами',
		'Полностью использовать возможности, предоставляемые PostgreSQL для реализации логики приложения',
		'Необходимый уровень знаний о методах и принципах использования БД при разработке ПО',
		'Понимать внутреннюю организацию сервера',
	]

	return (
		<div className={styles.section6}>
			<h2 className={styles.section6__title}>
				По окончанию курса слушатели смогут
			</h2>
			<ul className={styles.section6__list}>
				{courseOutcomes.map((outcome, index) => (
					<li key={index}>{outcome}</li>
				))}
			</ul>
		</div>
	)
}

export default Section6

// import React from 'react';
// import styles from './CourseSlide.module.scss';

// const CourseSlide: React.FC = () => {
//   return (
//     <div className={styles.slide}>
//       <h1 className={styles.title}>По окончанию курса слушатели смогут</h1>
//       <ul className={styles.list}>
//         <li>Понимание различий между PostgreSQL и основными конкурентами</li>
//         <li>Понимать внутреннюю организацию сервера</li>
//         <li>Полностью использовать возможности, предоставляемые PostgreSQL для реализации логики приложения</li>
//         <li>Необходимый уровень знаний о методах и принципах использования БД при разработке ПО</li>
//       </ul>
//     </div>
//   );
// };

// export default CourseSlide;
