'use client';

import Image from 'next/image';
import styles from './image-picker.module.css'
import { useRef, useState } from "react";

export default function ImagePicker({label , name}){
    const [ImagePrevState, setImagePrevState] = useState();
    const ImageInput = useRef();


    function HandleriMAGE(){
        ImageInput.current.click();

    }

    function HandlerPreview(event){
      const file = event.target.files[0];

      if (!file){
        setImagePrevState(null);
        return;
      }

      
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePrevState(fileReader.result)
    }

    fileReader.readAsDataURL(file);

    }


    return (
      <>
        <div className={styles.picker}>
          <label htmlFor={name}>{label}</label>
          <div className={styles.controls}>
            <div className={styles.preview}>
              {!ImagePrevState && <p>No image picked yet</p>}
              {ImagePrevState && <Image src={ImagePrevState} alt="please select an image"  fill required />}
            </div>
            <input
              className={styles.input}
              type="file"
              name={name}
              id={name}
              accept="image/png , image/jpeg"
              ref={ImageInput}
              onChange={HandlerPreview}
            />
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={HandleriMAGE}
          >
            Pick an Image{" "}
          </button>
        </div>
      </>
    );
}