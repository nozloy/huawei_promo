'use client'

import { ThreeDCard } from '@/components/shared/3d-card'
import { pura } from '@/data/items'
import { motion, AnimatePresence } from 'framer-motion'

export const PuraCardSwitcher = () => {
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

	return (
		<div className='flex flex-col gap-2 items-center h-[700px]'>
			{/* Контейнер с flex */}
			<div className='flex flex-wrap gap-4 justify-center min-h-screen py-2'>
				<AnimatePresence mode='popLayout'>
					{pura.map((item, index) => (
						<motion.div
							key={item.name}
							custom={index} // Передаем индекс карточки
							variants={cardVariants}
							initial={'hiddenLeft'} // Исходная позиция
							animate='visible' // Анимация показа
							exit={'exitRight'} // Анимация ухода
							transition={{ duration: 0.3 }}
						>
							<ThreeDCard {...item} size={50} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	)
}
