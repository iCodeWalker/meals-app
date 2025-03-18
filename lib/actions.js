"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// all the functions inside this file will be treated as server action.

// Helper function to identify invalid inputs
function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(formData) {
  // a directive that creates a so called server action, which is function that is guaranted to be executed on the server and only there on server.

  // in Next js "action" props of form, Next.js behind the scene created a request and the send the request to the Next.js server that is serving the website, and than we can handle the form submission there.

  const meal = {
    // name props is used to access the value of input field.
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  console.log(meal);
  // Validate the input fields
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid Input");
  }

  // Call the function to save the meal
  await saveMeal(meal);
  redirect("/meals");
}
