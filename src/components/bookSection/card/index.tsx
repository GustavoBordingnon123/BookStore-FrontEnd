import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import Button from '../../butoon/index';

interface BookProps {
  id?: number;
  name: string;
  description: string;
  picture: string;
  price: number;
}

export default function Card(book: BookProps) {
  const navigate = useNavigate();

  const capaTeste = book.picture;

  const favoritar = () => {
    alert('Você favoritou');
  };

  const handleDetalhesClick = () => {
    navigate(`/book/${book.id}`);
    // navigate(`/bookViewPage`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img src={capaTeste} alt="Capa do livro" />
        <div className={styles.favoritar}>
          <AiFillHeart onClick={favoritar} />
        </div>
      </div>

      <div className={styles.textContainer}>
        <h3>{book.name}</h3>
        <h4>R$ {book.price}</h4>
      </div>

      <Button text="Detalhes" onClick={handleDetalhesClick} />

      <Button text="Comprar" />
    </div>
  );
}
