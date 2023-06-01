import React, { useRef, useState } from "react";
import styles from './Slider.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

// imgs import:

import imagem1 from '../../images/percyjacksonBanner.jpg'; 
import imagem2 from '../../images/assasinscreedBanner.jpg';
import imagem3 from '../../images/castleBanner.jpg';


export default function SlideSwipper(){
    return(
        <>
            <div className={styles.swiperContainer}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiperSlide}><img src={imagem1} /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}><img src={imagem3} /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}><img src={imagem1} /></SwiperSlide>
                </Swiper>
            </div>
        </>

    );
}