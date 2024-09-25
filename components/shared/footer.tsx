import React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'

interface Props {
	className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('pt-10', className)}>
			<Container className='flex flex-col text-white/50 text-sm text-center'>
				<p>Фирменный магазин Huawei в городе Иркутск</p>
				<p>ИП Денисюк Сергей Владимирович</p>
				<p>ОГРНИП 323385000072334 ИНН 384403417509</p>
				<p>Информация на данной странице не является офертой.</p>
			</Container>
		</div>
	)
}
