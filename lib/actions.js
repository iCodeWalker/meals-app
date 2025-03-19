"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// all the functions inside this file will be treated as server action.

// Helper function to identify invalid inputs
function isInvalidText(text) {
  return !text || text.trim() === "";
}

// export async function shareMeal(formData) {
// When using useActionState hook to receive response from the server actions, we have to pass the shareMeal()
// function to the useActionState arg, since we have passed it to the "useActionState" we have to change the parameter of the shareMeal() action
export async function shareMeal(prevState, formData) {
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
    // throw new Error("Invalid Input");
    // Instead of throwing just error we can also return values or response object to be precise
    // and we can access these response objects in components

    // The object must be a serialized object that is it should not contain any methods, as the methods will be lost when we access it inside the components
    return {
      message: "Invalid Input",
    };
  }

  // Call the function to save the meal
  await saveMeal(meal);
  // We have to clear the previous cache of the meals page as Next.js regresivley caches the data and even on saving the meal we won't be able to see the newly added meal on the meals page. To delete the previous cache next js has a built in function and we can use it here.

  // This function tells next.js to revalidate the cache that belongs to a certain route path
  revalidatePath("/meals", "page"); // => will revalidate only '/meals' page
  redirect("/meals");
}
