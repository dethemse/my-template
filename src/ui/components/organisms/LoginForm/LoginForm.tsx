import { InputGroup } from '@/ui/components/molecules/InputGroup';
import { Button } from '@/ui/components/atoms/Button';

export const LoginForm = () => {
	return (
		<div className="w-64 space-y-4">
			<p className="text-center text-xl font-bold">Login</p>
			<div className="flex flex-col gap-y-4 rounded-sm bg-muted p-6">
				<InputGroup
					inputProps={{
						type: 'email',
						placeholder: 'Enter your email',
					}}
					labelProps={{
						children: 'Email',
					}}
				/>
				<InputGroup
					inputProps={{
						type: 'password',
						placeholder: 'Enter your password',
					}}
					labelProps={{
						children: 'Password',
					}}
				/>
				<Button>Login</Button>
			</div>
		</div>
	);
};
