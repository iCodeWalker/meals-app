"use client";

import { useRef } from "react";
import Styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();

  function handlePickerClick() {
    imageInputRef.current.click();
  }

  return (
    <div className={Styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={Styles.controls}>
        <input
          className={Styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button
          className={Styles.button}
          type="button"
          onClick={handlePickerClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
