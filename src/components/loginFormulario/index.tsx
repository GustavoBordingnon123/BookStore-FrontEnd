import React from 'react';
import { useEffect } from 'react';

import styles from './loginFormulario.module.scss';
import logoIcon  from '../images/Logo.png'
import bookGif from '../images/readingGif.gif'
import Input from '../input';
import Button from '../butoon';


export default function LoginFormulario(){

    let [loginVisibility,setLoginVisibility] = React.useState("");
    let [registerVisibility,setRegisterVisibility] = React.useState("hidden");

    const showLogin = () => {
        setRegisterVisibility("hidden");
        setLoginVisibility("on");
    }

    const showRegister = () => {
        setRegisterVisibility("on");
        setLoginVisibility("hidden");
    }

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
                            <div className={styles.tituloContainer}>
                                <img src={logoIcon} alt="logo" />
                                <p>BookStore</p>
                            </div>
                            <div className={styles.option}>
                                <p onClick={showLogin}>Login</p>
                                <p>|</p>
                                <p onClick={showRegister}>Criar conta</p>
                            </div>
                        </div>

                        <div className={styles.loginForm} id={loginVisibility}>
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

                                {/* <Button text='Criar conta' /> */}
                            </div>

                        </div>

                        <div className={styles.registerForm} id={registerVisibility}>

                            <p className={styles.titulo}>Crie sua conta</p>

                            <div className={styles.inputContainer}>

                                <Input label='Nome' placeHolder='nome' />

                                <Input label='Email:' placeHolder='gustavo@outlok.com' />

                                <Input label='Senha' placeHolder='*********'/>

                                <Input label='Confirmar senha' placeHolder='*********'/>

                            </div>

                            <div className={styles.buttonContainer}>

                                <Button text='Criar Conta'/>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}