'use client'

import { ThreeDCard } from '@/components/shared/3d-card'
import { SwitchOnPage } from '@/components/shared/switch-on-page'
import { items41, items46 } from '@/data/items'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const GT5CardSwitcher = () => {
	const [is41mm, setIs41mm] = useState(false)
	const [showItems, setShowItems] = useState(true)

	const handleSwitchChange = (value: boolean) => {
		setShowItems(false) // Сначала скрываем текущие карточки

		setTimeout(() => {
			setIs41mm(value) // Меняем группу после завершения анимации
			setShowItems(true) // Показываем новую группу карточек
		}, 500) // Время должно совпадать с длительностью анимации выхода
	}

	// Анимации для карточек
	const cardVariants = {
		hiddenLeft: (index: number) => ({
			opacity: 0,
			x: -100,
			transition: { delay: index * 0.1 }, // Задержка для каждой карточки
		}),
		hiddenRight: (index: number) => ({
			opacity: 0,
			x: 100,
			transition: { delay: index * 0.1 },
		}),
		visible: (index: number) => ({
			opacity: 1,
			x: 0,
			transition: { delay: index * 0.1, duration: 0.3 },
		}),
		exitLeft: (index: number) => ({
			opacity: 0,
			x: 100,
			transition: { delay: index * 0.1, duration: 0.3 },
		}),
		exitRight: (index: number) => ({
			opacity: 0,
			x: -100,
			transition: { delay: index * 0.1, duration: 0.3 },
		}),
	}

	const currentItems = is41mm ? items41 : items46

	return (
		<div className='flex flex-col gap-2 items-center'>
			<SwitchOnPage onChange={handleSwitchChange} />

			{/* Контейнер с flex */}
			<div className='flex flex-wrap gap-4 justify-center py-2 h-[700px]'>
				<AnimatePresence mode='popLayout'>
					{showItems &&
						currentItems.map((item, index) => (
							<motion.div
								key={item.name}
								custom={index} // Передаем индекс карточки
								variants={cardVariants}
								initial={is41mm ? 'hiddenRight' : 'hiddenLeft'} // Исходная позиция
								animate='visible' // Анимация показа
								exit={is41mm ? 'exitLeft' : 'exitRight'} // Анимация ухода
								transition={{ duration: 0.3 }}
							>
								<ThreeDCard {...item} size={is41mm ? 41 : 46} />
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</div>
	)
}
