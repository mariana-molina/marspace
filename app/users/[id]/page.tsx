import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface UserProfileProps {
	params: {
		id: string;
	};
}

export async function generateMetadata({
	params,
}: UserProfileProps): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: UserProfileProps) {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	const { name, image, bio } = user ?? {};
	return (
		<div>
			<h1>{name}</h1>
			<img src={image ?? '/profile.png'} alt={`${name} profile picture`} />
			<h3>Bio</h3>
			<p>{bio}</p>
		</div>
	);
}
