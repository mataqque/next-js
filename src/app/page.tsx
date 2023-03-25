import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import ComponentHome from './home/components/home';
import { SectionBanner } from './home/components/sectionBanner/sectionBanner';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={styles.main}>
			<ComponentHome></ComponentHome>
			<SectionBanner />
		</main>
	);
}
