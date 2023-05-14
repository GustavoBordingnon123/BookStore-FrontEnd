import styles from './footer.module.scss';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';

export default function Footer(){
    return(
        <footer>

            <div className={styles.container}>

                <div className={styles.socialMediaContainer}>

                    <div>
                        <a href='https://github.com/GustavoBordingnon123'>
                            <FaGithubSquare size={28}/>
                        </a>
                    </div>

                    <div>
                        <a href='https://www.linkedin.com/in/gustavo-bordignon-326861203/'>
                            <AiFillLinkedin size={32}/>
                        </a>
                    </div>

                    <div>
                        <a href=''>
                            <SiGmail size={28}/>
                        </a>
                    </div>

                    
                    <div>
                        <a href=''>
                            <SiMicrosoftoutlook size={28}/>
                        </a>
                    </div>

                    <div>
                        <a href=''>
                            <IoIosPaper size={28}/>
                        </a>
                    </div>

                </div>

                <div className={styles.credits}>
                    <p>todos os creditos vão para gustavo bordignon</p>
                </div>

            </div>

        </footer>
    )
}