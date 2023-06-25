import React, { useState } from 'react';
import styles from './navbarMobile.module.scss';

import logoIcon  from '../../images/Logo.png'

//icons 
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai'


export default function NavBar({ busca, setBusca, isCartVisible, setIsCartVisible }: any) {

  const [itensContainerVisible, setItensContainerVisible] = useState(false);
  const navigate = useNavigate();

  function cartAnimation(){

    if(isCartVisible){
        setIsCartVisible(false);
    }else{
        setIsCartVisible(true);
    }

  }

  const toggleItensContainer = () => {
    setItensContainerVisible(!itensContainerVisible);
  };

  const goToHome = () => {
    navigate(`/`);
  };

  const goToPerfil = () => {
    navigate(`/perfil`);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <AiOutlineMenu size={32} onClick={toggleItensContainer} fill='white' />
        </div>

        <div className={styles.cartContainer}>
            <AiOutlineShoppingCart 
                size={32} 
                onClick={cartAnimation}
            />
        </div>

      </div>

      <div className={styles.itensContainer} style={{ display: itensContainerVisible ? 'block' : 'none' }}>

            <div className={styles.inputLine}>
                <input 
                    className={styles.input} 
                    placeholder='procure aqui seu livro favorito...' 
                    onChange={(e) => setBusca(e.target.value)}
                    value={busca}
                />
            </div>

            <div className={styles.homeLine} onClick={goToHome}>
                <img src={logoIcon} alt="Logo"/>
                <p>Home</p>
            </div>

            <div className={styles.line} onClick={goToPerfil}>
                <AiOutlineUser fill="white" size={32}/>
                <p>Configure sua conta</p>
            </div>

            <div className={styles.line} onClick={goToPerfil}>
                <BsBook fill="white" size={32}/>
                <p>Categorias</p>
            </div>

            <div className={styles.line} onClick={goToPerfil}>
                <AiFillHeart fill="white" size={32}/>
                <p>Favoritos</p>
            </div>

      </div>
    </>
  );
}
