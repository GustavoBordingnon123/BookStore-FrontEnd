import styles from './card.module.scss';
import { AiFillHeart } from 'react-icons/ai'
import Button from '../../butoon/index';

interface booksProps{
   name: string,
   description: string,
   picture: string,
   price: number
}



export default function Card(books:booksProps){

    const capaTeste = books.picture;

    const favoritar = () =>{
        alert('Voçê favoritou')
    }

    return(
        <>
            <div className={styles.container}>

                <div className={styles.imagesContainer}>
                    <img src={capaTeste}/>
                    <div className={styles.favoritar}>
                        <AiFillHeart onClick={favoritar}/>
                    </div>
                </div>

                <div className={styles.textContainer}>
                    <h3>{books.name}</h3>
                    <h4>R$ {books.price}</h4>
                </div>
                
                <Button />
                
            </div>
        </>
    )
}