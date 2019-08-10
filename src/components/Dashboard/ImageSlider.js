import React from "react";

// Change the Image

import image1 from "../../asset/flashimage1.JPG";
import image2 from "../../asset/flashimage2.JPG";
import image3 from "../../asset/flashimage3.JPG";
import image4 from "../../asset/flashimage4.JPG";
import image5 from "../../asset/flashimage5.JPG";

const ImageSlider = () => {
  return (
    <div className="fullScreen">
      <div className="slider_container">
        <div>
          <img src={image1} alt="view" />
        </div>
        <div>
          <img src={image2} alt="view" />
        </div>
        <div>
          <img src={image3} alt="view" />
        </div>
        <div>
          <img src={image4} alt="view1" />
        </div>
        <div>
          <img src={image5} alt="view1" />
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
