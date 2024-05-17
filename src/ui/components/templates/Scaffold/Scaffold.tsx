import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
	header?: ReactNode;
	footer?: ReactNode;
}>;

export const TemplateScaffold = ({ header, footer, children }: Props) => {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			{header && <header>{header}</header>}

			<main className="flex-1">{children}</main>

			{footer && <footer>{footer}</footer>}
		</div>
	);
};
