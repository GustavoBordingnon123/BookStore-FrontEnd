import styles from './cardToCart.module.scss';
import { FaTrashAlt } from 'react-icons/fa';

type CardToCartProps = {
    name:string,
    price:number,
    picture:string
}

export default function CartToCart({name,price,picture}: CardToCartProps){

    return(
        <>
            <div className={styles.container}>
                <img src={picture} /> 
                <div className={styles.textContainer}>
                    <p className={styles.bookName}>{name}</p>
                    <p>R$: {price}</p>
                </div>
                <FaTrashAlt size={28}/>
            </div>
        </>
    );
}