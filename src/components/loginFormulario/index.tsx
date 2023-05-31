import styles from './loginFormulario.module.scss';
import logoIcon  from '../images/Logo.png'
import bookGif from '../images/readingGif.gif'
import Input from '../input';
import Button from '../butoon';

export default function LoginFormulario(){
    return(
        <>
            <section className={styles.section}>

                <div className={styles.blocoEsquerdo}>
                    <p className={styles.titulo}>Compre seus<br />livros favoritos aqui</p>
                    <img src={bookGif} />
                </div>

                <div className={styles.blocoDireito}>
                    <div className={styles.container}>
                        <div className={styles.head}>
                            <img src={logoIcon} alt="logo" />
                            <p>BookStore</p>
                        </div>

                        <p className={styles.titulo}>Faça o Login</p>

                        <div className={styles.inputContainer}>
                            <Input label='Email:' placeHolder='gustavo@outlok.com' />

                            <Input label='Password' placeHolder='*********'/>
                        </div>

                        <div className={styles.funcoes}>
                            <div className={styles.checkbox}>
                                <input type='checkbox'/>
                                <a>Manter Conectado</a>
                            </div>

                            <a>Esqueci minha senha</a>
                        </div>

                        <div className={styles.buttonContainer}>

                            <Button text='logar'/>

                            <Button text='Criar conta' />

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}