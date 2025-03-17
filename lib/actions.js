"use server";

// all the functions inside this file will be treated as server action.

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
}
