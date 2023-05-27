import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import Button from '../../butoon/index';

// animations:
import Lottie from 'react-lottie';
import heartAnimation from '../../../animations/heartAnimation.json';
import checkAnimation from '../../../animations/heartAnimation.json';

interface BookProps {
  id?: number;
  name: string;
  description: string;
  picture: string;
  price: number;
  setidBookviewPage?: any;
}

export default function Card(book: BookProps) {

  const navigate = useNavigate();
  
  const capaTeste = book.picture;

  //animations const
  const [isLiked, setLikeState] = React.useState(false);
  const [animationState, setAnimationState] = React.useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });
  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: heartAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsCheck = {
    loop: false,
    autoplay: false, 
    animationData: checkAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const favoritar = () => {
    const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation 
            ? reverseAnimation
            : normalAnimation,
        })
        setLikeState(!isLiked);
  };

  const goToBookviewPage = () => {
    book.setidBookviewPage(book.id);
    navigate(`/book/${book.id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img src={capaTeste} alt="Capa do livro" />

        <div className={styles.favoritar} onClick={() => {
          const reverseAnimation = -1;
          const normalAnimation = 1;

          setAnimationState({
            ...animationState,
            isStopped: false,
            direction: animationState.direction === normalAnimation 
              ? reverseAnimation
              : normalAnimation,
          })
          setLikeState(!isLiked);
        }}>
          <div className={styles.animation}>
            <Lottie
              options={defaultOptions}
              width={45}
              height={30}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
          </div>
        </div>

      </div>

      <div className={styles.textContainer}>
        <h3>{book.name}</h3>
        <h4>R$ {book.price}</h4>
      </div>

      <Button 
        text="Detalhes" onClick={goToBookviewPage} />

      <Button text="Comprar" 
      // onClick={() => {
      //   return(
      //     <div className={styles.animation}>
      //     <Lottie
      //       options={defaultOptions}
      //       width={45}
      //       height={30}
      //       direction={animationState.direction}
      //       isStopped={animationState.isStopped}
      //       isPaused={animationState.isPaused}/>
      //   </div>
      //   )
      // }}
      />

    </div>
  );
}
