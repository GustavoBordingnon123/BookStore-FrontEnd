import React from 'react';
import logo from './logo.svg';

//imagens para o banner

import imagem1 from '../components/images/percyjacksonBanner.jpg'; 
import imagem2 from '../components/images/assasinscreedBanner.jpg';
import imagem3 from '../components/images/castleBanner.jpg';


//components

import NavBar from '../components/navbar/desktop';
import Slider from '../components/sliderBanner/slider'
import BookSection from '../components/bookSection/highlightsSection/index';
import TimeLineFiltrada from '../components/bookSection/timeLineFiltrada/index';
import CartSection from '../components/cartSection/index';
import Footer from '../components/footer/index';

// simulação de usuario

import config from '../components/config.json';
const userData = config.users[0];
//tela:


export default function Home(){
   
  const [busca,setBusca] = React.useState("");
  const [isCartVisible,setIsCartVisible] = React.useState(false);
  const [idBookviewPage,setidBookviewPage] = React.useState();

  return (
    <>
    
      <CartSection 
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        userData={userData}
      />

      <NavBar 
        busca={busca} 
        setBusca={setBusca} 
        isCartVisible={isCartVisible} 
        setIsCartVisible={setIsCartVisible}
      />

      <Slider images={[imagem1, imagem2,imagem3]}/>

      {busca === "" ? (
        <div className='normalHomePage'>

          <BookSection 
            title='Em destaque:' 
            indices={[0,6]}
          />

          <BookSection 
            title='Economia: ' 
            indices={[7,12]}
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
    </>
  );

}