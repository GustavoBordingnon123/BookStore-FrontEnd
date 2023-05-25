import styles from './bookAbout.module.scss';
import { AiFillStar } from 'react-icons/ai';
import capaTeste from '../images/harryPotterCapa.jpg';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import config from '../config.json';


import Button from '../butoon';
import Card from '../bookSection/card/index';

export default function BookAbout(){

    const Books = config.books;


    return(
        <>
            <div className={styles.bookAbout}>

                <div className={styles.capa}>
                    <img src={capaTeste} />
                </div>

                <div className={styles.textoContainer}>

                    <div className={styles.head}>
                        <p className={styles.titulo}>Re:zero volume 1</p>

                        <div className={styles.avaliacaoContainer}> 
                            <div>
                                <AiFillStar fill='yellow' size={32}/>
                                <AiFillStar fill='yellow' size={32}/>
                                <AiFillStar fill='yellow' size={32} />
                                <AiFillStar fill='yellow' size={32} />
                                <AiFillStar fill='gray' size={32} />
                            </div>
                            <div>
                                <p>Avaliações:135</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.descricao}>

                        <p className={styles.titulo}>Descrição</p>

                        <p className={styles.bookDescription}>
                            Lorem Ipsum é simplesmente uma simulação de texto da 
                            indústria tipográfica e de impressos, e vem sendo 
                            utilizado desde o século XVI, quando um impressor 
                            Lorem Ipsum é simplesmente uma simulação de 
                        </p>

                    </div>


                    <p className={styles.price}>R$: 50.00</p>

                    <div className={styles.comprar}>

                        <div className={styles.quantidadeContainer}>
                            <AiOutlineMinus />
                            <p>1</p>
                            <AiOutlinePlus />
                        </div>

                        <Button text='Comprar' />

                        <AiOutlineShoppingCart size={28}/>
                    </div>
                    

                </div>
            </div>

            <div className={styles.bookTechnicalInfo}>

                <div className={styles.textoContainer}>
                    
                    <h3 className={styles.titulo}>detalhes do produto:</h3>

                    <p>Autor: gustav</p>
                    <p>Quantidade de paginas: 300</p>
                    <p>Linguas disponiveis: ing/pt</p>
                    <p>Editora: panini</p>

                </div>

                <div className={styles.bookDimensions}> 

                    <div className={styles.bookRight}>
                        <img src={capaTeste} />    
                        <p>100CM</p>    
                    </div>

                    <p>150cm</p>

                </div>

            </div>

            <div className={styles.buyAlso}> 

            <p className={styles.titulo}>COMPRE TAMBÉM</p>

            <div className={styles.booksBuyAlso}>
                {Books.slice(0, 3).map((card) => {
                    return (
                        <Card 
                            name={card.name} 
                            description={card.description} 
                            picture={card.picture} 
                            price={card.price}
                        />
                    );
                })}
            </div>

            </div>


        </>
    );
}