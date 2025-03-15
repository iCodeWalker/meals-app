"use client";

import { useRef, useState } from "react";
import Styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();

  const [pickedImage, setPickedImage] = useState();

  function handlePickerClick() {
    imageInputRef.current.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    // Now we have to convert the picked file into Data-url, it is a value that can used in the input field of the image element : "src" attr value

    // We use FileReader() class to convert the the file into Data-url

    const fileReader = new FileReader();

    // "readAsDataURL" does not return anything, so to access the DataUrl generated we have to assign a value to the "onLoad" property of this object.

    // In this we store a function as a value in "onLoad" and this function will be then triggered by the file reader once "readAsDataURL" is done with its work.

    // we can access the generated DataUrl in "fileReader.result" and not as an input to the function.

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={Styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={Styles.controls}>
        <div className={Styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="Selectd Image" fill />}
        </div>
        <input
          className={Styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          // multiple : to allow user to pick multiple files
          onChange={handleChangeImage}
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
