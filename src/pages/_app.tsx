import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Montserrat } from 'next/font/google';
import '../styles/global.css';
const montserrat = Montserrat({
	weight: 'variable',
	subsets: ['latin'],
});

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={montserrat.className}>
			<Component {...pageProps} />
		</div>
	);
}
