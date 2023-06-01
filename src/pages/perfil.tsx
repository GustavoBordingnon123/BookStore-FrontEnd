import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import CartSection from '../components/cartSection';
import NavBar from '../components/navbar/desktop';
import PerfilFormulario from '../components/perfilFormulario';
import Footer from '../components/footer/index';


export default function BookViewPage() {

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
        <PerfilFormulario />
        <Footer />
      </div>
    </>
  );
}







