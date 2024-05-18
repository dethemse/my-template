import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['./src/ui/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)', ...fontFamily.sans],
				oswald: ['var(--font-oswald)', ...fontFamily.sans],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};

export default config;
