import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { pura } from '@/data/items'
import { ThreeDCard } from './3d-card'
import { BlinkShadow } from './blink-shadow'

interface Props {
	className?: string
}

export const PuraCardCarousel: React.FC<Props> = ({ className }) => {
	const allitems = pura
	return (
		<div className={cn('relative', className)}>
			<Container>
				<Carousel>
					<CarouselContent>
						{allitems.map((item, index) => (
							<CarouselItem key={index}>
								<ThreeDCard {...item} section='pura-gift-section' />
							</CarouselItem>
						))}
					</CarouselContent>
					{/* Добавляем анимированную тень справа */}
				</Carousel>
			</Container>
			<BlinkShadow />
		</div>
	)
}
