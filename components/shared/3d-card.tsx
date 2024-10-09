'use client'

import Image from 'next/image'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'

interface Props {
	name: string
	image: string
	size?: number
	subname: string
}
export function ThreeDCard({ name, image, size, subname }: Props) {
	return (
		<CardContainer>
			<CardBody
				className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] h-auto rounded-xl p-6 border 
    ${
			size === 46
				? 'md:w-[20rem]'
				: size === 50
				? 'md:w-[21rem]'
				: 'md:w-[16rem]'
		}
`}
			>
				<CardItem
					translateZ='50'
					className='text-lg font-bold text-neutral-600 dark:text-white'
				>
					{' '}
					{name}
				</CardItem>
				<CardItem
					as='p'
					translateZ='60'
					className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
				>
					{subname}
				</CardItem>
				<CardItem
					translateZ='100'
					className='w-full mt-4 flex items-center justify-center'
				>
					<Image
						src={image}
						height='200'
						width='200'
						className='h-[400px] xl:h-[400px] w-auto object-cover rounded-xl'
						alt='thumbnail'
						loading='eager'
					/>
				</CardItem>
			</CardBody>
		</CardContainer>
	)
}
