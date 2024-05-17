'use client';

import { ComponentProps, useId } from 'react';

import { Input } from '@/ui/components/atoms/Input';
import { Label } from '@/ui/components/atoms/Label';
import { cn } from '@/utils/cn';

type Props = {
	labelProps: ComponentProps<typeof Label>;
	inputProps: ComponentProps<typeof Input>;

	variant?: 'horizontal' | 'vertical';
};

export const InputGroup = ({ inputProps, labelProps, variant = 'vertical' }: Props) => {
	const inputId = useId();

	return (
		<div
			className={cn([
				'flex gap-2',
				variant === 'horizontal' && 'flex-row items-center',
				variant === 'vertical' && 'flex-col',
			])}
		>
			<Label {...labelProps} htmlFor={inputId} />
			<Input {...inputProps} id={inputId} />
		</div>
	);
};
