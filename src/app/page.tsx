import 'server-only';

import { PageProps } from '@/types/app';
import { LoginForm } from '@/ui/components/organisms/LoginForm';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';

export default function Home({}: PageProps) {
	return (
		<TemplateScaffold header={<p>Header</p>} footer={<p>footer</p>}>
			<div className="container flex justify-center">
				<LoginForm />
			</div>
		</TemplateScaffold>
	);
}
