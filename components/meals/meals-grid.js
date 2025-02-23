import MealItem from "./meal-item";
import Styles from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={Styles.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meals} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;
