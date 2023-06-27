import Link from 'next/link';
import Image from 'next/image';
import style from './NavMenu.module.css';

export default function NavMenu() {
	return (
		<nav className={style.nav}>
			<Link className={style.logo} href="/">
				<Image
					src="/logowhite.svg"
					alt="Marspace logo"
					width={56}
					height={30}
				/>
				<p>MARSPACE</p>
			</Link>
			<ul className={style.links}>
				<li>
					<Link href={'/about'}>About</Link>
				</li>
				<li>
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li>
					<Link href={'/users'}>Users</Link>
				</li>
			</ul>
		</nav>
	);
}
