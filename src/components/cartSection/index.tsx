import styles from './cartSection.module.scss';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import CartToCart from './cardToCart/index';
import React from 'react';

type CartSectionProps = {
    isCartVisible: boolean;
    setIsCartVisible: Function;
    userData: any;
}


export default function CartSection({ isCartVisible,setIsCartVisible,userData}: CartSectionProps){

    const slideDirection = isCartVisible ? styles.slideRight : styles.slideLeft;
    const itens = userData.cartItens;

    let [totalValue,setTotalValue] = React.useState(Number);

    function simularCompra(){
        setIsCartVisible(false)
        alert('COMPRA REALIZADA COM SUCESSO');
    }

    return(
        
        <section className={slideDirection}>

            <div className={styles.body}>
                
                <div className={styles.container}>
                    
                    <div className={styles.headerCart}>
                        <div className={styles.close}>
                            <MdOutlineCancel size={32} onClick={() => setIsCartVisible(false)}/>
                        </div>
                        <div className={styles.title}>
                            <AiOutlineShoppingCart  size={32} />
                            <p>Meu carrinho</p>
                        </div>
                    </div>

                    <div className={styles.itensContainer}>
                        {itens.map((card:any) => {
                            return (
                                 <>
                                    <CartToCart 
                                         name={card.name}
                                         price={card.price}
                                         picture={card.picture}
                                     />
                                 </>
                             )
                         })} 
                    </div>

                    <div className={styles.footerCart}>
                        <p>TOTAL: R$ 50.0</p>
                        <button onClick={simularCompra}>COMPRAR</button>
                    </div>

                </div>

            </div>

        </section>
    );
}  