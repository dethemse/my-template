import 'server-only';

import { PageProps } from '@/types/app';

export default function Home({}: PageProps) {
	return (
		<main className="p-24">
			<p>Hello World</p>
		</main>
	);
}
