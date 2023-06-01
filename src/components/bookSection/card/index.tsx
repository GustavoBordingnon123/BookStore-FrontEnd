import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import Button from '../../butoon';
import Swal from 'sweetalert2';

import { Any, animated, useSpring } from 'react-spring';

// Zustand
import create from 'zustand';
import  useStore from '../../../store';

interface BookProps {
  id?: number;
  name: string;
  description: string;
  picture: string;
  price: number;
  bears?: string[];
}

interface StoreState {
  bears: string[];
  addToBearList: (bear: string) => void;
  increasePopulation: any;
}


export default function Card(book: BookProps) {

  const {setItems} = useStore();

  const navigate = useNavigate();

  const capaTeste = book.picture;
  
  const [isAnimating, setIsAnimating] = useState(false);

  const [cart, setCart] = useState<BookProps[]>([]);

  const { transform } = useSpring({
    transform: isAnimating ? 'scale(1.5)' : 'scale(1)',
    config: { duration: 300 },
  });

  const goToBookviewPage = () => {
    navigate(`/book/${book.id}`);
  };

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  // const addToCart = () => {
  //   setCart([...cart, book]);
  //   Swal.fire({
  //     position: 'top',
  //     icon: 'success',
  //     title: 'Adicionado ao carrinho',
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  //   // window.location.reload();
  // };

  const handleSubmit = () => {
    setItems(cart);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Adicionado ao carrinho',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
  
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);

      const updatedCart = [...parsedCart, ...cart];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const cartTest = useStore((state) => state.items)
  console.log(cartTest);

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img src={capaTeste} alt="Capa do livro" />

        <div className={styles.favoritar}>
          <AiFillHeart
            onClick={handleClick}
            style={{ color: isAnimating ? 'red' : 'gray' }}
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <h3>{book.name}</h3>
        <h4>R$ {book.price}</h4>
      </div>

      <Button text="Detalhes" onClick={goToBookviewPage} />
      <Button text="Comprar" onClick={handleSubmit} />
    </div>
  );
}
