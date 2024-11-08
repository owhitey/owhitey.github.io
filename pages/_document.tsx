import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					rel='apple-touch-icon'
					sizes='152x152'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#13b2b9' />
				<meta name='msapplication-TileColor' content='#13b2b9' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
