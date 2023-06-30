'use client';
import { useSession } from 'next-auth/react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
	const { data: session, status } = useSession();

	console.log('HERE SESION:', session, 'HERE STATUS:', status);

	if (status === 'authenticated') {
		return <>{children}</>;
	} else {
		return <></>;
	}
}
