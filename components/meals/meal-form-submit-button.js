"use client";

import { useFormStatus } from "react-dom";

export default function MealFormSubmitButton() {
  // To update the status of the form submission we will use useFormStatus hook
  //   const status = useFormStatus();
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
}
