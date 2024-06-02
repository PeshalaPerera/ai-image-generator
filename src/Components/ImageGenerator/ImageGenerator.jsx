import React, { useState } from "react";
import "./ImageGenerator.css";
import SearchInput from "./SearchInput.jsx";
import default_image from "../Assets/default_image.jpeg";

const ImageGenerator = () => {
const [imageUrl, setImageUrl] = useState("/")
  let inputRef = useRef(null);

  const ImageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }

    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${inputRef.current.value}&client_id=YOUR_ACCESS_KEY`
    );
  }
  
  return (
    <div className="ai-image-generator">
      <div className="header">
        Ai image <span>generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={imageUrl === "/" ? default_image : imageUrl} alt="" />
        </div>
      </div>
      <SearchInput />
    </div>
  );
};

export default ImageGenerator;
