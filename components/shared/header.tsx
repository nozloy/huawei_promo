import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/shared/container'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('', className)}>
			<Container className='flex flex-col items-center pb-0 pt-0'>
				<Link
					className='focus:outline-primary bg-white rounded-b-xl py-2 px-10'
					href='https://hi-techno.ru'
				>
					<Image
						src='https://hi-techno.ru/wp-content/uploads/2023/07/text-logo.svg'
						alt='logo'
						width={288}
						height={80}
						className='w-72 h-12 mb-2'
					/>
				</Link>
			</Container>
		</header>
	)
}
