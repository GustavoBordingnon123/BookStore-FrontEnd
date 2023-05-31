import styles from './cardToCart.module.scss';

//icons 
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

//alert
import Swal from 'sweetalert2';

type CartToCartProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
};

export default function CartToCart({ id, name, price, picture }: CartToCartProps) {
  const [cart, setCart] = useState<CartToCartProps[]>([]);

  const removeFromCart = (id: number) => {
    const storedCart = localStorage.getItem('cart');
    Swal.fire({
      title: 'Você deseja excluir esse item?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Excluir',
      denyButtonText: `Não desejo`,
    }).then((result: any) => {
      if (result.isConfirmed) {
        if (storedCart) {
            const parsedCart: CartToCartProps[] = JSON.parse(storedCart);
            const updatedCart = parsedCart.filter((item) => item.id !== id);
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        Swal.fire('Excluido!', '', 'success');
        window.location.reload();
      }
    });
  };

  return (
    <div className={styles.container}>
      <img src={picture} />
      <div className={styles.textContainer}>
        <p className={styles.bookName}>{name}</p>
        <p>R$: {price}</p>
      </div>
      <FaTrashAlt size={28} onClick={() => removeFromCart(id)} />
    </div>
  );
}
