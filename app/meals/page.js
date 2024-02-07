import Link from 'next/link';
import styles from '../meals/page.module.css';
import { Suspense } from 'react';
import { dummyMeals } from '@/Components/DummyDB/dummydb';
import Mealsgrid from '@/Components/meals/meals-grid';
import MealsRedirect from '@/Components/lib/MealsRedirect';



export default function Meals({ NewMeals, title }) {
  console.log(NewMeals, "MEALS");
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious food , created{" "}
          <span className={styles.highlight}> by you </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. it is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share"> Share your favorite recipe </Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Loading Meals.......</p>}
        >
          {title && <><Mealsgrid Meals={NewMeals} /><MealsRedirect/></>}
          {!title && <Mealsgrid Meals={dummyMeals} />}
        </Suspense>
      </main>
    </>
  );
}