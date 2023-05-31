//dependencies
import styles from './bookAbout.module.scss';
import { useParams } from "react-router-dom";
import config from '../config.json';

// icons
import { AiFillStar } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


// componentes
import Button from '../butoon';
import Card from '../bookSection/card/index';

interface BookProps {
    bookId?: number;
}
  
export default function BookAbout(bookId: BookProps){
    const Books = config.books;

    const id = bookId.bookId;
    const BookInfos = config.books.find((livro) => livro.id === id);

    
    return(
        <>
            <div className={styles.bookAbout}>

                <div className={styles.capa}>
                    <img src={BookInfos?.picture} />
                </div>

                <div className={styles.textoContainer}>

                    <div className={styles.head}>
                        <p className={styles.titulo}>{BookInfos?.name}</p>

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
                            {BookInfos?.description}
                        </p>

                    </div>


                    <p className={styles.price}>R$ {BookInfos?.price}</p>

                    <div className={styles.comprar}>

                        <div className={styles.quantidadeContainer}>
                            <AiOutlineMinus />
                            <p>1</p>
                            <AiOutlinePlus />
                        </div>

                        <Button text='Comprar'/>

                        <AiOutlineShoppingCart size={28}/>
                    </div>
                    

                </div>
            </div>

            <div className={styles.lineContainer}>
                <div className={styles.line}></div>
            </div>

            <div className={styles.bookTechnicalInfo}>

                <div className={styles.textoContainer}>
                    
                    <h3 className={styles.titulo}>detalhes do produto:</h3>

                    <p>Autor: gustav</p>
                    <p>Quantidade de paginas: {BookInfos?.qntPages}</p>
                    <p>Linguas disponiveis: {BookInfos?.language}</p>
                    <p>Editora: {BookInfos?.editora}</p>

                </div>

                <div className={styles.bookDimensions}> 

                    <div className={styles.bookRight}>
                        <img src={BookInfos?.picture} />    
                        <p>100CM</p>    
                    </div>

                    <div className={styles.bookWidth}>
                        <p>150cm</p>
                    </div>
                  

                </div>

            </div>

            <div className={styles.lineContainer}>
                <div className={styles.line}></div>
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