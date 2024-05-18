import { Inter, Oswald } from 'next/font/google';

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const oswald = Oswald({
	subsets: ['latin'],
	variable: '--font-oswald',
	display: 'swap',
});

export { danfoRegular } from './Danfo';
