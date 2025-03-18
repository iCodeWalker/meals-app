import fs from "node:fs";

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

export async function saveMeal(meal) {
  const slug = slugify(meal.title, { lower: true }); // To create a slug (unique)
  const instructions = xss(meal.instructions); // To sanatize the user input from instructions field

  meal.slug = slug; // Create a new key in object
  meal.instructions = instructions; // overwrite the instructions with sanatized instructions

  // Storing the uploaded image in public folder so it will be available through out the project.
  const imageExtension = meal.image.name.split(".").pop(); // To find the extension of the image uploaded by user.

  const fileName = `${meal.slug}.${imageExtension}`; // name with which image will be saved.

  const stream = fs.createWriteStream(`public/images/${fileName}`); // write the image to the public folder

  const bufferdImage = await meal.image.arrayBuffer();

  // as bufferdImage is an arrayBuffer so we have to convert it to buffer when passing as argument to write().
  stream.write(Buffer.from(bufferdImage), (error) => {
    // function runs when writing is completed.
    // it receives error as arg, null when writing is success.
    if (error) {
      throw new Error("Saving Image failed!");
    }
  });

  // we will store the path to the image in database and not the whole image
  meal.image = `/images/${fileName}`; // overwrite the image object with the path --> points to public folder

  // Save in database
  // Insert data into meals table and into the following fields like title, summary etc
  db.prepare(
    `
    INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug) 
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
}
