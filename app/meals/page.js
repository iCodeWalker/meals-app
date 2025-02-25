import Link from "next/link";
import Styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

// Separating the data fetching part into separate function
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  // we can add async to server components that we can't do in Client Components in react
  // we can now access data from database without using any useEffect or fetch request.
  // console.log(meals, "measl");
  return (
    <>
      <header className={Styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={Styles.highlight}> by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={Styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={Styles.main}>
        {/* <MealsGrid meals={meals} /> */}
        <Suspense fallback={<p className={Styles.loading}>Fetching meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
