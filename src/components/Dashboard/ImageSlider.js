import React from "react";

// Change the Image
import userviewBackgroundImage from "../../images/pexels-photo-414612.jpeg";
import userviewUserImage from "../../images/1.jpg";
import test1 from "../../images/2.jpg";
import test2 from "../../images/3.jpg";
const ImageSlider = () => {
  return (
    <div className="fullScreen">
      <div className="slider_container">
        <div>
          <img src={userviewBackgroundImage} alt="view" />
        </div>
        <div>
          <img src={userviewUserImage} alt="view" />
        </div>
        <div>
          <img src={test2} alt="view" />
        </div>
        <div>
          <img src={test1} alt="view1" />
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
