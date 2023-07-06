import Link from 'next/link';
import styles from './UserCard.module.css';

interface UserCardProps {
	id: string | null;
	name: string | null;
	age: number | null;
	image: string | null;
}

export default function UserCard({ id, name, age, image }: UserCardProps) {
	return (
		<div className={styles.card}>
			<img
				src={image ?? '/profile.png'}
				alt="profile picture"
				className={styles.cardImage}
			/>
			<div className={styles.cardContent}>
				<h3>
					<Link href={`/users/${id}`}>{name}</Link>
				</h3>
				<p>Age: {age}</p>
			</div>
		</div>
	);
}
