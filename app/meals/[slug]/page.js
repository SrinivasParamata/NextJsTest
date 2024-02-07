'use client';

import Image from "next/image"
import styles from "./page.module.css"
import { notFound, usePathname } from "next/navigation";
import { dummyMeals } from "@/Components/DummyDB/dummydb";



export default function Slug({params}){
  const path = usePathname();
  let mealdata;
  const mealIdentifier = path.replace(/^\/meals\//, "");
  const dataa= dummyMeals.find((item) => {
    if (item.slug === mealIdentifier) {
      mealdata = item;
      return true; // Stop searching once a match is found
    }
    mealdata = false;
    return false; // Continue searching
  });

  if (!dataa){
    notFound();
  }
  
  mealdata.instructions = mealdata.instructions.replace(/\n/g, "<br />");
  

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={mealdata.image} alt={mealdata.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{mealdata.title}</h1>
          <p className={styles.creator}>
            <a href={`mailto:${mealdata.creator_email}`}>{mealdata.creator}</a>
          </p>
          <p className={styles.summary}>{mealdata.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: mealdata.instructions }}
        ></p>
      </main>
    </>
  );
}