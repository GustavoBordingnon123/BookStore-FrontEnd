import React from 'react';
import logo from './logo.svg';

//imagens para o banner

import imagem1 from '../components/images/percyjacksonBanner.jpg'; 
import imagem2 from '../components/images/assasinscreedBanner.jpg';
import imagem3 from '../components/images/castleBanner.jpg';


//components

import NavBar from '../components/navbar/header';
import BookSection from '../components/bookSection/highlightsSection/index';
import TimeLineFiltrada from '../components/bookSection/timeLineFiltrada/index';
import CartSection from '../components/cartSection/index';
import Footer from '../components/footer/index';

//Sliders 

import SimpleSlider from '../components/Sliders/sliderNew'
import Slider from '../components/Sliders/sliderBanner/slider'
import SlideSwipper from '../components/Sliders/SliderSwipper';



export default function Home(){
   
  const [busca,setBusca] = React.useState("");
  const [isCartVisible,setIsCartVisible] = React.useState(false);
  const opacity = isCartVisible ? 'opMedium' : 'opFull';

  return (
    <>
    
      <CartSection 
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
      />
      
      <div className={opacity}>
        <NavBar 
          busca={busca} 
          setBusca={setBusca} 
          isCartVisible={isCartVisible} 
          setIsCartVisible={setIsCartVisible}
        />


        {busca === "" ? (
          <div className='normalHomePage'>
                
            <SlideSwipper />

            <BookSection 
              title='Em destaque:' 
              indices={[0,6]}
            />

            <BookSection 
              title='Manga: ' 
              indices={[0,6]}
            />

            <BookSection 
              title='Quadrinhos:' 
              indices={[13,18]}
            />
          
          </div>
        ) : (
          <div>
            <TimeLineFiltrada busca={busca} />
          </div>
        )}
        
        <Footer />
      </div>
    </>
  );

}