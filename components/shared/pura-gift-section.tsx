'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip'
import Image from 'next/image'
import { BackgroundGradient } from '../ui/background-gradient'
import { Button } from '../ui/button'

interface Props {
	className?: string
}

export const PuraGiftSection: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('px-5', className)}>
			<div className='text-4xl xl:text-6xl font-white font-bold text-center pb-10'>
				<p>Подарки за покупку</p>
			</div>
			<div className='mx-auto p-2 rounded-xl relative md:w-[65rem] text-slate-700 text-xl flex flex-col md:flex-row justify-center gap-5'>
				<BackgroundGradient className='flex flex-col gap-2 rounded-[22px] bg-white p-5 w-[22rem]'>
					<Image
						width={300}
						height={300}
						src='https://shop-cdn.huawei.com/ru/pms/uomcdn/RUHW/pms/202309/gbom/6942103104879/group/800_800_F60F8ABD4E98329AD474280F9C97D54D.png'
						alt={'Часы HUAWEI Watch GT4'}
					/>
					<div className='text-center flex flex-row justify-center'>
						HUAWEI GT4
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Info size={16} />
								</TooltipTrigger>
								<TooltipContent>
									<p>Модели:</p>
									<p>Phoinix-B19F</p>
									<p>Phoinix-B19L</p>
									<p>Phoinix-B19W</p>
									<p>Aurora-B19L</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<p className='text-center pb-10'>при покупке Pura 70 Ultra</p>
					<Button
						onClick={() =>
							window.open(process.env.NEXT_PUBLIC_PURA70ULTRA_PAGE, '_blank')
						}
						variant={'outline'}
						className='text-white bg-yellow-500 font-bold text-lg w-full'
						size={'lg'}
					>
						Подробнее
					</Button>
				</BackgroundGradient>

				<BackgroundGradient className='flex flex-col gap-2 rounded-[22px] bg-white p-5 w-[22rem]'>
					<Image
						width={300}
						height={300}
						src='https://shop-cdn.huawei.com/ru/pms/uomcdn/RUHW/pms/202405/gbom/6942103118555/group/800_800_65C28C0DA65213EF64C151A6C186B645.png'
						alt={'Часы HUAWEI Watch FIT 3'}
					/>
					<div className='text-center flex flex-row justify-center'>
						HUAWEI Watch FIT 3
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Info size={16} />
								</TooltipTrigger>
								<TooltipContent>
									<p>Модели:</p>
									<p> Solo-B09S</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<p className='text-center pb-10'>с Pura 70 или Pura 70 Pro</p>
					<Button
						onClick={() =>
							window.open(process.env.NEXT_PUBLIC_PURA70_PAGE, '_blank')
						}
						variant={'outline'}
						className='text-white font-bold text-lg bg-yellow-500 w-full'
						size={'lg'}
					>
						Подробнее
					</Button>
				</BackgroundGradient>
			</div>
		</div>
	)
}
