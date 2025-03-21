"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealFormSubmitButton from "@/components/meals/meal-form-submit-button";

import { useActionState } from "react";

const ShareMealPage = () => {
  // A function that stoes the form: as in Nextjs we don't have to collect the data from the form and than send the data to the backend.

  // By importing server actions from different file now we can use this component as a 'client component' also
  // use client

  // ### To access server actions response inside the components we have to use a hook "useActionState"
  // 1st arg = action that should be trigger on form submit,
  // 2nd arg = initial state value

  // state has the latest response from the shareMeal action
  // now we have to set 'formAction' for the action prop of the form element

  const [state, formAction] = useActionState(shareMeal, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        {/* <form className={classes.form} action={shareMeal}> */}
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            {/* <button type="submit">Share Meal</button> */}
            <MealFormSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
