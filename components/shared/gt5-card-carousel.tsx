import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { items41, items46 } from '@/data/items'
import { ThreeDCard } from './3d-card'
import { BlinkShadow } from './blink-shadow'

interface Props {
	className?: string
}

export const GT5CardCarousel: React.FC<Props> = ({ className }) => {
	const allitems = [...items46, ...items41]
	return (
		<div className={cn('relative', className)}>
			<Container>
				<Carousel>
					<CarouselContent>
						{allitems.map((item, index) => (
							<CarouselItem key={index}>
								<ThreeDCard {...item} section='gt5-gift-section' />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</Container>
			<BlinkShadow />
		</div>
	)
}
