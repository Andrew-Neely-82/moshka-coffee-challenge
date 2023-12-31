import { LeftArrow, RightArrow } from "./import.js";
import { images } from "./index.js";
import { useState } from "react";
import "./style.scss";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImg(index);
  };

  const handleLeftClick = () => {
    setSelectedImg((prevSelected) => (prevSelected === 0 ? images.length - 1 : prevSelected - 1));
  };

  const handleRightClick = () => {
    setSelectedImg((prevSelected) => (prevSelected === images.length - 1 ? 0 : prevSelected + 1));
  };

  return (
    <div className="Gallery__">
      <div className="Gallery__header">
        <h3>Gallery</h3>
      </div>
      <div className="Gallery__wrapper">
        <LeftArrow onClick={handleLeftClick} />
        <div className="Gallery__wrapper_container">
          {images.map((img, key) => {
            const isSelected = selectedImg === key;
            const props = {
              className: isSelected ? "selected" : "not-selected",
              src: img.src,
              key: key,
              onClick: () => handleImageClick(key),
            };
            return (
              <div className="image-container">
                <img {...props} alt={img.alt} />
              </div>
            );
          })}
        </div>
        <RightArrow onClick={handleRightClick} />
      </div>
    </div>
  );
};

export default Gallery;
