'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

const shadowVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

export const BlinkShadow: React.FC<Props> = ({ className }) => {
	return (
		<motion.div
			className={cn(
				'absolute top-0 right-0 h-full w-12 bg-[radial-gradient(closest-side,rgba(255,255,255,0.8),transparent)] pointer-events-none animate-fadeInOut md:hidden',
				className,
			)}
			initial='hidden'
			animate='visible'
			variants={shadowVariants}
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatType: 'reverse',
			}}
		/>
	)
}
