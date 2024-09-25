import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { items41, items46 } from '@/data/items'
import { ThreeDCard } from './3d-card'

interface Props {
	className?: string
}

export const CardCarousel: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Container>
				<Carousel>
					<CarouselContent>
						{items41.map((item, index) => (
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
