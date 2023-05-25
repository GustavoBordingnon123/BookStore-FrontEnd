import styles from './highlights.module.scss';
import Card from '../card/index';
import config from '../../config.json';

interface sectionProps {
    title: string;
    cards?: [];
}
  
export default function BookSection(sectionProps:sectionProps){

    const Books = config.books;

    return(
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h2>{sectionProps.title}</h2>
                </div>
                <div className={styles.cardsContainer}>
                    {Books.map((card) => {
                        return (
                            <>
                               <Card 
                                    id={card.id}
                                    name={card.name} 
                                    description={card.description} 
                                    picture={card.picture} 
                                    price={card.price}
                                />
                            </>
                        )
                    })}                    

                </div>
            </div>
        </>
    )
}