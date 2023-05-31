import styles from './header.module.scss';

import NavBar from './desktop/index';
import NavbarMobile from './mobile/index';

export default function Header(){
    return(
        <>
            <header className={styles.header}>

                <div className={styles.desktop}>
                    <NavBar />
                </div>

                <div className={styles.mobile}>
                    <NavbarMobile />
                </div>

            </header>
        </>
    );
}