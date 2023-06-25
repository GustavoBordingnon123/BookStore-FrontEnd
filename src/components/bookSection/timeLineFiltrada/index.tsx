import styles from './TimeLineFiltrada.module.scss';
import config from '../../config.json';
import Card from '../card';

interface TimeLineFiltradaProps {
  busca: string;
}

export default function TimeLineFiltrada({ busca }: TimeLineFiltradaProps) {

    const Books = config.books;
  
    const booksFiltrados = Books.filter((book) => {
      return book.name.toLowerCase().includes(busca.toLowerCase());
    });
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.cardsSection}>
          {booksFiltrados.length > 0 ? (
            booksFiltrados.map((book) => (
              <div className={styles.cardContainer}>
                <Card 
                  name={book.name} 
                  description={book.description} 
                  picture={book.picture} 
                  price={book.price}
                />
              </div>
            ))
          ):(
            <div className={styles.erroContainer}>
              <div className={styles.textContainer}>
                <p>Ops, não encontramos esse livro.</p>
              </div>
            </div>
          )}
          </div>
        </div>
      </>
    );
  }
