import React from 'react';
import styles from './navbarMobile.module.scss';
import logoIcon  from '../../images/Logo.png'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function NavbarMobile(){

    let isMenuOn = false;
    let visibilidade = "menuOff"

    function showMenu(){
        alert('oi')
        if(isMenuOn){
            isMenuOn = false;
            visibilidade= "menuOff"
        }else{
            isMenuOn = true;
            visibilidade= "menu_show"
        }

    }

    return(
        <>
            <div className={styles.menu}>
                <div className={styles.btn} onClick={showMenu}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
                
                <nav id={styles.nav} className={visibilidade}>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Clients</a></li>
                    <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}