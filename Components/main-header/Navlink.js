'use client';

import Link from "next/link";
import styles from '../main-header/Navlink.module.css'
import { usePathname } from "next/navigation";

export default function Navlinkk({href , children}){
    const path = usePathname();
    return (
      <>
        <Link href={href} className={ path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link }>
          {children}
        </Link>
      </>
    );
};