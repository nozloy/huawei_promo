import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import { GT5CardSwitcher } from '@/components/shared/gt5-card-switcher'
import { GT5GiftSection } from '@/components/shared/gift-section'
import { GT5CardCarousel } from '@/components/shared/gt5-card-carousel'
import { PuraCardSwitcher } from '@/components/shared/pura-card-switcher'
import { PuraCardCarousel } from '@/components/shared/pura-card-carousel'
import { PuraGiftSection } from '@/components/shared/pura-gift-section'
import { Separator } from '@/components/ui/separator'
import { Cover } from '@/components/ui/cover'

export default function Home() {
	return (
		<div className='flex flex-col gap-2 pt-10 scroll-smooth'>
			<div className='text-4xl xl:text-6xl font-white font-bold text-center'>
				Опережая тренды
				<br />и сохраняя аутентичность
			</div>
			<div className='hidden sm:block'>
				<PuraCardSwitcher />
			</div>
			<div className='block sm:hidden'>
				<PuraCardCarousel />
			</div>
			<div id='pura-gift-section'>
				<PuraGiftSection />
			</div>

			<Separator className='my-4 max-w-4xl mx-auto bg-slate-700' />

			<div className=' relative text-4xl xl:text-6xl font-white font-bold text-center pt-10'>
				<Cover>
					Многогранность
					<br />
					времени
				</Cover>
			</div>
			<div className='hidden sm:block'>
				<GT5CardSwitcher />
			</div>
			<div className='block sm:hidden'>
				<GT5CardCarousel />
			</div>
			<div id='gt5-gift-section'>
				<GT5GiftSection />
			</div>

			<ShootingStars className='-z-10' />
			<StarsBackground className='-z-20' />
		</div>
	)
}
