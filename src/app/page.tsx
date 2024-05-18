import 'server-only';

import { PageProps } from '@/types/app';

export default function Home({}: PageProps) {
	return (
		<main className="p-24 text-7xl">
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<p>Inter</p>
			<p className="font-oswald">Oswald</p>
			<p className="font-danfo-regular">Danfo Regular (Local)</p>
		</main>
	);
}
