import React, { useEffect, useState } from 'react';
import styles from './slider.module.scss';
import { HiArrowCircleRight } from 'react-icons/hi';
import { HiArrowCircleLeft } from 'react-icons/hi';

interface ImageSliderProps {
  images: string[];
}

  const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  function next(){
    if(currentIndex < 2){
      setCurrentIndex(currentIndex + 1);
    }else{
      setCurrentIndex(0);
    }
  }

  function previous(){
    if(currentIndex == 0){
      setCurrentIndex(2);
    }else{
      setCurrentIndex(currentIndex - 1);
    }
  }
 

  return (
    <div className={styles.sliderContainer}>
      <HiArrowCircleLeft size={32} onClick={previous}/>
      <div className={styles.sliderImgContainer}>
        <img src={images[currentIndex]} alt="Slider image" className={styles.sliderImage} title="Compre também: "/>
      </div>
      <HiArrowCircleRight size={32} onClick={next}/>
    </div>

  );
};

export default ImageSlider;
