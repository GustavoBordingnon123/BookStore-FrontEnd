import React, { useState, useEffect } from 'react';
import styles from './cartSection.module.scss';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Swal from 'sweetalert2';

import CartToCart from './cardToCart/index';

type CartSectionProps = {
    isCartVisible: boolean;
    setIsCartVisible: Function;
    userData?: any;
}

export default function CartSection({ isCartVisible, setIsCartVisible }: CartSectionProps) {
    const [items, setItems] = useState<any[]>(() => {
        const storedItems = localStorage.getItem('cart');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const slideDirection = isCartVisible ? styles.slideRight : styles.slideLeft;
    const totalValue = calcularPagamentoFinal();

    function simularCompra() {
        setIsCartVisible(false);
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Compra realizada com sucesso',
            showConfirmButton: false,
            timer: 1500
        })
    }

    function calcularPagamentoFinal() {
        const total = items
          .map((card: any) => card.price)
          .reduce((total: number, price: number) => total + price, 0);
      
        const formattedTotal = total.toFixed(2); // Formata o total para ter 2 dígitos após o ponto decimal
      
        return formattedTotal;
    }
      

    return (
        <section className={slideDirection}>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.headerCart}>
                        <div className={styles.close}>
                            <MdOutlineCancel size={32} onClick={() => setIsCartVisible(false)} />
                        </div>
                        <div className={styles.title}>
                            <AiOutlineShoppingCart size={32} />
                            <p>Meu carrinho</p>
                        </div>
                    </div>
                    <div className={styles.itensContainer}>
                        {items.map((card: any) => (
                            <CartToCart
                                id={card.id}
                                name={card.name}
                                price={card.price}
                                picture={card.picture}
                            />
                        ))}
                    </div>
                    <div className={styles.footerCart}>
                        <p>Valor a pagar : R${totalValue}</p>
                        <button onClick={simularCompra}>COMPRAR</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
