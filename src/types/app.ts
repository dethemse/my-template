import { PropsWithChildren } from 'react';

export type PageProps<TParams = void> = Readonly<{
	params: TParams;
	searchParams: Record<string, string | string[] | undefined>;
}>;

export type LayoutProps<TParams = void, TParallelRoutes = void> = Readonly<
	PropsWithChildren<{
		params: TParams;
	}> &
		TParallelRoutes
>;
