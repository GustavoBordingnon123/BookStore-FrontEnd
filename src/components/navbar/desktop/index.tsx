import React from 'react';
import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import logoIcon  from '../../images/Logo.png'

//icons 
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai'


export default function NavBar({busca,setBusca,isCartVisible,setIsCartVisible}: any){


    let [categoriasVisibility,setCategoriasVisibility] = React.useState("hidden");

    const showCategorias = () => {
        setCategoriasVisibility("categoriaContainer");
    }

    const offCategorias = () => {
        setCategoriasVisibility("hidden");
    }

    const navigate = useNavigate();
    
    function cartAnimation(){

        if(isCartVisible){
            setIsCartVisible(false);
        }else{
            setIsCartVisible(true);
        }

    }

    const goToHome = () => {
        navigate(`/`);
    };

    const goToPerfil = () => {
        navigate(`/perfil`);
    };

   
    
    return(
        <nav className={styles.navbar}>
            <div className={styles.container}>
            
                <img src={logoIcon} alt="Logo" onClick={goToHome}/>

                <input 
                    className={styles.input} 
                    placeholder='procure aqui seu livro favorito...' 
                    onChange={(e) => setBusca(e.target.value)}
                    value={busca}
                />

                <div className={styles.iconContainer} onClick={goToPerfil}>
                    <AiOutlineUser size={32}/>
                    <label>Configure sua conta</label>
                </div>

                <p> | </p>

                <div className={styles.iconContainer}>
                    <div 
                        className={styles.tituloContainer} 
                        onMouseEnter={showCategorias} 
                        onMouseLeave={offCategorias}
                    >
                        <BsBook size={32} />
                        <label>Categorias</label>
                    </div>  

                    <div 
                        id={categoriasVisibility}
                        onMouseEnter={showCategorias} 
                        onMouseLeave={offCategorias}
                    >
                        <p>Terror</p>
                        <p>Ação</p>
                        <p>Ficcção cientifica</p>
                        <p>Romance</p>
                        <p>Manga</p>
                    </div>
                </div>

                <p> | </p>

                <div className={styles.iconContainer}>
                    <AiFillHeart size={32} />
                    <label>Favoritos</label>
                </div>

                <p> | </p>

                <div className={styles.iconContainer}>
                    <AiOutlineShoppingCart 
                        size={32} 
                        onClick={cartAnimation}
                    />
                </div>

            </div>
        </nav>
    )
}
