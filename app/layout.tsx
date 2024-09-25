import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'
const montserrat = Montserrat({
	subsets: ['cyrillic'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Huawei & Hi-Techno',
	description: 'Подарки за предзаказ Huawei Watch GT 5',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</head>
			<body
				className={cn(
					'min-h-screen font-montserrat antialiased',
					montserrat.variable,
				)}
			>
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	)
}
