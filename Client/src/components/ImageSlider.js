import React from "react";
import "../css/imageSlider.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../images/1.png'
import image2 from '../images/2.png'
// import image3 from '../images/3.jpg'
// import image4 from '../images/4.jpg'

function ImageSlider() {
  return (
    <div className="ImageSlider">
     <AliceCarousel autoPlay {...{infinite:"true"}} autoPlayInterval="2000">
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
      <img src={image1} className="sliderimg" alt=""/>
      <img src={image2} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}

export default ImageSlider;
