'use client'
import React from 'react'
import { Gift } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from './container'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
interface Props {
	className?: string
}

export const GT5GiftSection: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('px-5 pt-10', className)}>
			<div className='text-4xl xl:text-6xl font-white font-bold text-center pb-10'>
				Подарки за покупку
			</div>
			<Container className='flex flex-col xl:flex-row justify-between px-6 xl:px-32 items-center bg-white rounded-xl relative w-[22rem] md:w-[40rem] xl:w-auto'>
				<div
					className='absolute text-slate-300 z-20 bottom-60 left-4  md:left-auto md:top-5 md:right-10 drop-shadow
				'
				>
					<Gift
						size={100}
						className='shadow-inner shadow-slate-300 rounded-xl'
					/>
				</div>
				<motion.div
					animate={{
						y: [0, -20, 0], // Эффект bounce: вверх на 20px и назад
					}}
					transition={{
						duration: 2, // Длительность одного цикла
						repeat: Infinity, // Повторяется бесконечно
						repeatType: 'loop', // Тип повторения (можно менять на mirror или reverse)
						ease: 'easeInOut', // Сглаживание анимации
					}}
				>
					<Image
						src={
							'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/headphones/freebuds6i/new/img/huawei-freebuds-6i-anc-upgrate.webp'
						}
						alt={''}
						width={500}
						height={500}
						className='pt-5'
					/>
				</motion.div>
				<div className='flex flex-col gap-2 pt-10 h-full'>
					<p className='text-black text-left text-xl'>
						Бонусы при покупке Huawei Watch GT 5
					</p>
					<div className='text-black text-left text-xl font-bold'>
						+1 год гарантии
					</div>
					<div className='text-black text-left text-xl font-bold'>
						Huawei Freebuds 6i
					</div>
					<div className='pt-2 md:pt-10'>
						<Button
							onClick={() =>
								window.open(process.env.NEXT_PUBLIC_TARGET_PAGE, '_blank')
							}
							variant={'outline'}
							className='text-white bg-yellow-500 w-full font-bold text-lg'
							size={'lg'}
						>
							Подробнее
						</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}
