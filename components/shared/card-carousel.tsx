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

interface Props {
	className?: string
}

export const CardCarousel: React.FC<Props> = ({ className }) => {
	const allitems = [...items41, ...items46]
	return (
		<div className={cn('', className)}>
			<Container>
				<Carousel>
					<CarouselContent>
						{allitems.map((item, index) => (
							<CarouselItem key={index}>
								<ThreeDCard {...item} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</Container>
		</div>
	)
}
