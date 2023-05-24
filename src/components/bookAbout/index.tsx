import styles from './bookAbout.module.scss';
import { AiFillStar } from 'react-icons/ai';
import capaTeste from '../images/harryPotterCapa.jpg';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


import Button from '../butoon';

export default function BookAbout(){
    return(
        <>
            <div className={styles.bookAbout}>

                <div className={styles.capa}>
                    <img src={capaTeste} />
                </div>

                <div className={styles.textoContainer}>

                    <p className={styles.titulo}>Re:zero volume 1</p>

                    <div className={styles.avaliacaoContainer}> 
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <div>
                            <p>Avaliações:135</p>
                        </div>
                    </div>

                    <p className={styles.titulo}></p>

                    <p className={styles.bookDescription}>
                        Lorem Ipsum é simplesmente uma simulação de texto da 
                        indústria tipográfica e de impressos, e vem sendo 
                        utilizado desde o século XVI, quando um impressor 
                        Lorem Ipsum é simplesmente uma simulação de 
                    </p>

                    <p className={styles.price}>R$: 50.00</p>

                    <div className={styles.comprar}>

                        <div className={styles.quantidadeContainer}>
                            <AiOutlineMinus />
                            <p>1</p>
                            <AiOutlinePlus />
                        </div>

                        <Button />

                        <AiOutlineShoppingCart />
                    </div>
                    

                </div>
            </div>
        </>
    );
}