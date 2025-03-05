import Image from "next/image";
import { Styles } from "./page.module.css";

const MealDetailsPage = ({ params }) => {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.image}>
          <Image fill />
        </div>
        <div className={Styles.headerText}>
          <h1>TITLE</h1>
          <p className={Styles.creator}>
            by <a href={`mailto:${"Email"}`}>Name</a>
          </p>
          <p className={Styles.summary}>SUMMARY</p>
        </div>
      </header>
      <main>
        <p
          className={Styles.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
