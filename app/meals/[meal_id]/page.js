import Image from "next/image";
import Styles from "./page.module.css";
import { getMeal } from "@/lib/meals";

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.meal_id);

  // ############### To have line breaks in the text #########
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={Styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={Styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={Styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={Styles.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
