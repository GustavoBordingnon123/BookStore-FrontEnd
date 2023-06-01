import React from 'react';
import styles from './Slider.module.scss';
import SliderNew from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//imagens para o banner

import imagem1 from '../images/percyjacksonBanner.jpg'; 
import imagem2 from '../images/assasinscreedBanner.jpg';
import imagem3 from '../images/castleBanner.jpg';

const SimpleSlider = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
          <SliderNew {...settings}>
            <div>
                <img src={imagem1} alt="Image 1" />
            </div>
            <div>
                <img src={imagem2} alt="Image 2" />
            </div>
            <div>
                <img src={imagem3} alt="Image 3" />
            </div>
        </SliderNew>
    </div>
  );
};

export default SimpleSlider;
