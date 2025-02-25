import Link from "next/link";
import Styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
  // we can add async to server components that we can't do in Client Components in react
  // we can now access data from database without using any useEffect or fetch request.
  const meals = await getMeals();
  console.log(meals, "measl");
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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
