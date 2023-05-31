import React from 'react';
import styles from './navbarMobile.module.scss';
import logoIcon  from '../../images/Logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function NavbarMobile(){
    return(
        <>
            <nav>
                <div className={styles.container}>
                
                <img src={logoIcon} alt="Logo" />

                <input 
                    // className={styles.input} 
                    // placeholder='procure aqui seu livro favorito...' 
                    // onChange={(e) => setBusca(e.target.value)}
                    // value={}
                />

                <div className={styles.containerUser}>
                    <AiOutlineUser size={32}/>
                    <label>Configure sua conta</label>
                </div>

                <p> | </p>

                <div className={styles.cartContainer}>
                    {/* <div className={styles.carrinhoQtdItens}><p>1</p></div> */}
                    <AiOutlineShoppingCart 
                        size={32} 
                        // onClick={cartAnimation}
                    />
                </div>

            </div>
            </nav>
        </>
    );
}