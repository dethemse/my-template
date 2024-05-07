import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		NODE_ENV: z.enum(['development', 'test', 'production']),
	},
	client: {
		NEXT_PUBLIC_BASE_URL: z.string().url(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_BASE_URL: process.env.BASE_URL,
	},
});
