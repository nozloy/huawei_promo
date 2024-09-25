'use client'
import React, { useState } from 'react'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'

interface Props {
	onChange: (is46mm: boolean) => void
	className?: string
}

export const SwitchOnPage: React.FC<Props> = ({ onChange, className }) => {
	const [is46mm, setIs46mm] = useState(false)

	const handleToggle = () => {
		setIs46mm(!is46mm)
		onChange(!is46mm) // передаем новое значение родителю
	}

	return (
		<div className={cn('flex items-center space-x-2 z-20 pt-10', className)}>
			<Label htmlFor='41mm' className='text-2xl font-bold pr-4'>
				41mm
			</Label>
			<Switch
				id='41mm'
				checked={is46mm}
				onCheckedChange={handleToggle} // отслеживаем изменения
				className='w-[52px] h-[25px] bg-white rounded-full relative shadow-[0_2px_10px] shadow-white outline-none cursor-default'
			/>
			<Label htmlFor='46mm' className='text-2xl font-bold pl-4'>
				46mm
			</Label>
		</div>
	)
}
