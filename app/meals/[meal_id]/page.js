const MealPage = ({ params }) => {
  return (
    <main>
      <h1>Meal Page</h1>
      <p>{params.meal_id}</p>
    </main>
  );
};

export default MealPage;
