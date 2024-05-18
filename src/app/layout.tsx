import 'server-only';
import type { Metadata } from 'next';

import { inter, danfoRegular, oswald } from '@/ui/fonts';
import { LayoutProps } from '@/types/app';
import './globals.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={`${inter.variable} ${oswald.variable} ${danfoRegular.variable}`}>
			<body className="font-inter">{children}</body>
		</html>
	);
}
