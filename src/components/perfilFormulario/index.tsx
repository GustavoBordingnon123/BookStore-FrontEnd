import PerfilCard from '../perfilCard';
import styles from './perfilFormulario.module.scss';

import { FaUserCircle } from 'react-icons/fa';

export default function PerfilFormulario(){
    return(
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                
                <div className={styles.head}>
                    <FaUserCircle size={48}/>
                    
                    <p>Gustavo Bordignon</p>

                    <p>Edite seus dados:</p>

                </div>

                <div className={styles.body}>
                    <PerfilCard title='Nome' data="Gustavo Bordignon" />
                    <PerfilCard title='email' data="gustavo.bordignon@outlook.com" />
                    <PerfilCard title='password' data="*******" />
                    <PerfilCard title='Linguagem' data="Portugues-Brasil" />
                </div>

            </div>
        </section>
        </>
    );
}