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
				<title>Предзаказ Huawei Watch GT 5</title>
				<meta
					name='description'
					content='Страница предзаказа новых часов Huawei Watch GT 5. Получите в подарок наушники Huawei Freebuds 6i и дополнительную гарантию на 1 год.'
				/>
				<meta property='og:title' content='Предзаказ Huawei Watch GT 5' />
				<meta
					property='og:description'
					content='Промо-страница предзаказа новых часов Huawei Watch GT 5. Получите в подарок наушники Huawei Freebuds 6i и дополнительную гарантию на 1 год.'
				/>
				<meta
					property='og:image'
					content='https://promo.hi-techno.ru/_next/image?url=https%3A%2F%2Fconsumer.huawei.com%2Fcontent%2Fdam%2Fhuawei-cbg-site%2Fcommon%2Fmkt%2Fpdp%2Fwearables%2Fwatch-gt5%2Fimg%2Fs3%2Fhuawei-watch-gt-5-color-46mm-black-2x.png&w=1080&q=75'
				/>
				<meta property='og:url' content='https://promo.hi-techno.ru' />
				<meta property='og:type' content='website' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Предзаказ Huawei Watch GT 5' />
				<meta
					name='twitter:description'
					content='Промо-страница предзаказа новых часов Huawei Watch GT 5. Получите в подарок наушники Huawei Freebuds 6i и дополнительную гарантию на 1 год.'
				/>
				<meta
					name='twitter:image'
					content='https://promo.hi-techno.ru/_next/image?url=https%3A%2F%2Fconsumer.huawei.com%2Fcontent%2Fdam%2Fhuawei-cbg-site%2Fcommon%2Fmkt%2Fpdp%2Fwearables%2Fwatch-gt5%2Fimg%2Fs3%2Fhuawei-watch-gt-5-color-46mm-black-2x.png&w=1080&q=75'
				/>
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
