// Import React
import React, {useContext} from 'react';

// Import styles of component Footer
import './style/Footer.css';
import Logo from '../Logo/Logo';
import {ReactComponent as IntagramIcon} from '../../assets/instagram.svg';
import {ReactComponent as YoutubeIcon} from '../../assets/youtube.svg';
import {ReactComponent as TwitterIcon} from '../../assets/twitter.svg';
import {Link} from 'react-router-dom';
import PaymentMethods from '../../assets/paymentmethods.png';
import UserContext from '../User/UserContext';

const Footer = ()=>{

    const user = useContext(UserContext);

    return(
        <div className='footerContainer'>
            <footer>

                {
                    !user.isLogin && ( 
                    <>
                        <div className='footerTop'>
                            <div className='summaryConversahora'>
                                <Logo />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ratione omnis facilis natus fugiat voluptates neque et at minima, repellat repellendus praesentium iste magni numquam. Consectetur animi blanditiis fugit quas?</p>
                            </div>

                            <div className='menuFooter'>
                                <ul>
                                    <h4>Conversahora</h4>
                                    <li>
                                        <Link to='/about-us' onClick={()=> window.scrollTo(0, 0)}>
                                            Sobre Nosotros
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/privacy-policies' onClick={()=> window.scrollTo(0, 0)}>
                                            Politica de Privacidad
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/terms-and-conditionals' onClick={()=> window.scrollTo(0, 0)}>
                                            Terminos y Condiciones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/faq' onClick={()=> window.scrollTo(0, 0)}>
                                            Postulate como Profesor
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='menuFooter'>
                                <ul>
                                    <h4>Ayuda</h4>
                                    <li>
                                        <Link to='/faq' onClick={()=> window.scrollTo(0, 0)}>
                                            Preguntas Frecuentes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/support' onClick={()=> window.scrollTo(0, 0)}>
                                            Soporte
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact-us' onClick={()=> window.scrollTo(0, 0)}>
                                            Contáctenos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about-us' onClick={()=> window.scrollTo(0, 0)}>
                                            ¿En que creemos?
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='menuFooter'>
                                <ul>
                                    <h4>¿Quieres ser profe?</h4>
                                    <li>
                                        <Link to='/faq' onClick={()=> window.scrollTo(0, 0)}>
                                            Postúlate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/faq' onClick={()=> window.scrollTo(0, 0)}>
                                            Reglamentos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='footerMedium'>
                            <div className='paySecurity'>
                                <h4>Pago Seguro</h4>
                                <img src={PaymentMethods} alt=""/>
                            </div>
                            <div className='points'>
                                <span>2.000 Tutores</span>
                            </div>
                            <div className='points'>
                                <span>15.000 Estudiantes</span>
                            </div>
                            <div className='points'>
                                <span>15 Idiomas</span>
                            </div>
                        </div>
                    </>
                    ) 
                            

                }

                <div className='footerBottom'>
                    <div className='copyright'>
                        <Logo />
                        <p>
                            Conversahora {new Date().getFullYear()}. Desarrollado por Pulpi Agencia Digital
                        </p>
                    </div>
                    <div className='socialMedia'>
                        <span>Siguenos</span>
                        <div className='socialMediaButtons'>
                            <a  className='btnInstagram' href="https://wordpress.org" target='_blank' rel='noopener noreferrer'>
                                <IntagramIcon />
                            </a>
                            
                            <a  className='btnYoutube' href="https://wordpress.org" target='_blank' rel='noopener noreferrer'>
                                <YoutubeIcon />
                            </a>
                            
                            <a  className='btnTwitter' href="https://wordpress.org" target='_blank' rel='noopener noreferrer'>
                                <TwitterIcon />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;