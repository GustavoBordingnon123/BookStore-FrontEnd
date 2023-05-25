import React from 'react';
import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import logoIcon  from '../../images/Logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function NavBar({busca,setBusca,isCartVisible,setIsCartVisible}: any){

    const navigate = useNavigate();
    
    function cartAnimation(){

        if(isCartVisible){
            setIsCartVisible(false);
        }else{
            setIsCartVisible(true);
        }

    }

    const goToHome = () => {
        navigate(`/home`);
    };
    
    return(
        <nav className={styles.navbar}>
            <div className={styles.container}>
            
                <img src={logoIcon} alt="Logo" onClick={goToHome} />

                <input 
                    className={styles.input} 
                    placeholder='procure aqui seu livro favorito...' 
                    onChange={(e) => setBusca(e.target.value)}
                    value={busca}
                />

                <div className={styles.containerUser}>
                    <AiOutlineUser size={32}/>
                    <label>Configure sua conta</label>
                </div>

                <p> | </p>

                <div className={styles.cartContainer}>
                    <AiOutlineShoppingCart 
                        size={32} 
                        onClick={cartAnimation}
                    />
                </div>

            </div>
        </nav>
    )
}
