import styles from './PerfilCard.module.scss';
import { MdEngineering } from 'react-icons/md';

interface perfilProps {
    title:string;
    data:string;
}
  

export default function PerfilCard(perfil: perfilProps){
    return(
        <>
            <div className={styles.cardContainer}>

                <div className={styles.cardHead}>
                    <p>{perfil.title}</p>
                    <MdEngineering size={32} title='clique aqui para configurar'/>
                </div>

                <div className={styles.cardData}>
                    <p>{perfil.data}</p>
                </div>

            </div>
        </>
    );
}