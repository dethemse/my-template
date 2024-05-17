import 'server-only';

import { PageProps } from '@/types/app';
import { LoginForm } from '@/ui/components/organisms/LoginForm';

export default function Home({}: PageProps) {
	return (
		<main className="m-6 space-y-5">
			<LoginForm />
		</main>
	);
}
