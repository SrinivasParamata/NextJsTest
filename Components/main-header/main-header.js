import Link from "next/link";

import FoodLogo from '@/assets/logo.png';
import styles from '@/Components/main-header/main-header.module.css'
import Image from "next/image";
import Navlinkk from '../main-header/Navlink';


export default function MainHeader() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={FoodLogo} alt="A palte full of food" priority />
          NextLevel fOOD
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Navlinkk href="/meals">Browse Meals </Navlinkk>
            </li>
            <li>
              <Navlinkk href="/community"> Foodies Community</Navlinkk>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
