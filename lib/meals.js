import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// To return a promise we add async to the function
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // adds a delay to mimike the api call

  // throw new Error("Loading Failed");
  return db.prepare("SELECT * from meals").all();
}

// To get meal data
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true }); // To create a slug (unique)
  const instructions = xss(meal.instructions); // To sanatize the user input from instructions field

  meal.slug = slug; // Create a new key in object
  meal.instructions = instructions; // overwrite the instructions with sanatized instructions
}
