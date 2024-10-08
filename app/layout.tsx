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
	description: 'Подарки за покупку Huawei Watch GT 5 и Pura 70',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<title>Предзаказ Huawei Watch GT 5</title>
				<meta
					name='description'
					content='Подарки при покупке Huawei Watch GT 5 и Pura 70'
				/>
				<meta property='og:title' content='Предзаказ Huawei Watch GT 5' />
				<meta
					property='og:description'
					content='Подарки при покупке Huawei Watch GT 5 и Pura 70'
				/>
				<meta
					property='og:image'
					content='https://promo.hi-techno.ru/_next/image?url=https%3A%2F%2Fshop-cdn.huawei.com%2Fru%2Fpms%2Fuomcdn%2FRUHW%2Fpms%2F202404%2Fgbom%2F6942103126895%2F800_800_052BECA7BCDFEEB8D7E3724802EA7770mp.png&w=828&q=75'
				/>
				<meta property='og:url' content='https://promo.hi-techno.ru' />
				<meta property='og:type' content='website' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content='Подарки при покупке Huawei Watch GT 5 и Pura 70'
				/>
				<meta
					name='twitter:description'
					content='Подарки при покупке Huawei Watch GT 5 и Pura 70'
				/>
				<meta
					name='twitter:image'
					content='https://promo.hi-techno.ru/_next/image?url=https%3A%2F%2Fshop-cdn.huawei.com%2Fru%2Fpms%2Fuomcdn%2FRUHW%2Fpms%2F202404%2Fgbom%2F6942103126895%2F800_800_052BECA7BCDFEEB8D7E3724802EA7770mp.png&w=828&q=75'
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
