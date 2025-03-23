import Image from "next/image";
import Styles from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const metaData = {
  title: "All meals",
  description: "Browse the delicious meals shared by our community.",
};

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.meal_id);

  // ############## To handle if user searches for some meal that does not exists #######
  if (!meal) {
    // #### we have to not found page here ####
    notFound(); // IT is a built in function that calls the nearest not-found or error page
    // Stops the component from executing and it shows the closest not found or error page
  }

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
