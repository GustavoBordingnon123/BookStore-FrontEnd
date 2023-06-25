import styles from './header.module.scss';

import NavBar from './desktop/index';
import NavbarMobile from './mobile/index';

export default function Header({busca,setBusca,isCartVisible,setIsCartVisible}: any){
    return(
        <>
            <header className={styles.header}>

                <div className={styles.desktop}>
                    <NavBar 
                        busca={busca} 
                        setBusca={setBusca} 
                        isCartVisible={isCartVisible} 
                        setIsCartVisible={setIsCartVisible}
                    />
                </div>

                <div className={styles.mobile}>
                    <NavbarMobile 
                        busca={busca}
                        setBusca={setBusca} 
                        isCartVisible={isCartVisible} 
                        setIsCartVisible={setIsCartVisible}    
                    />
                </div>

            </header>
        </>
    );
}