import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import { CardSwitcher } from '@/components/shared/card-switcher'
import { GiftSection } from '@/components/shared/gift-section'
import { CardCarousel } from '@/components/shared/card-carousel'

export default function Home() {
	return (
		<div className='flex flex-col gap-2 pt-10 scroll-smooth'>
			<div className='text-4xl xl:text-6xl font-white font-bold text-center'>
				Многогранность
				<br />
				времени
			</div>
			<div className='hidden sm:block'>
				<CardSwitcher />
			</div>
			<div className='block sm:hidden'>
				<CardCarousel />
			</div>
			<div id='gift-section'>
				<GiftSection />
			</div>

			<ShootingStars className='-z-10' />
			<StarsBackground className='-z-20' />
		</div>
	)
}
