'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import Link from 'next/link'

interface Props {
	name: string
	image: string
}
export function ThreeDCard({ name, image }: Props) {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] md:w-[16rem] w-[23rem] h-auto rounded-xl p-6 border  '>
				<CardItem
					translateZ='50'
					className='text-lg font-bold text-neutral-600 dark:text-white'
				>
					HUAWEI WATCH GT 5
				</CardItem>
				<CardItem
					as='p'
					translateZ='60'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
				>
					{name}
				</CardItem>
				<CardItem
					translateZ='100'
					className='w-full mt-4 flex items-center justify-center'
				>
					<Image
						src={image}
						height='500'
						width='500'
						className='h-[400px] xl:h-[400px] w-auto object-cover rounded-xl'
						alt='thumbnail'
						loading='eager'
					/>
				</CardItem>
				<div className='flex justify-center items-center mt-10'>
					<CardItem
						translateZ={20}
						as={Link}
						href='#gift-section'
						target='__blank'
						className='px-4 py-2 rounded-xl bg-yellow-500 text-white text-xl md:text-lg font-bold'
					>
						Подарки
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	)
}
