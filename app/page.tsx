import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function HomePage() {
	const session = await getServerSession();
	if (!session) {
		return redirect('api/auth/signin');
	}
	return (
		<div>
			<h1>Home Page</h1>
			<p>Some text</p>
		</div>
	);
}
