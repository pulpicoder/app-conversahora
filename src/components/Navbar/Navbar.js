// Import React
import React, {useContext} from 'react';

// Import styles of component Navbar 
import './style/Navbar.css';
import {Link} from 'react-router-dom'; 
import Login from '../Login/Login';
import Logo from '../Logo/Logo';
import UserContext from '../User/UserContext';
import {ReactComponent as Down} from '../../assets/down.svg'; 
import {ReactComponent as SearchIcon} from '../../assets/searchMovil.svg'; 
import {ReactComponent as AppleIcon} from '../../assets/apple.svg';
import {ReactComponent as FacebookIcon} from '../../assets/facebook.svg';
import {ReactComponent as GoogleIcon} from '../../assets/google.svg';
import {ReactComponent as CancelIcon} from '../../assets/cancel.svg';
import LoadingContext from '../Loading/LoadingContext';
import firebase from 'firebase/app';
import {auth} from '../../firebase';




const Navbar = ()=>{

    const user = useContext(UserContext);

    const loadingContext = useContext(LoadingContext);

    const onClickGoogle = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();

        try{
            const result = await auth.signInWithPopup(provider);
            loadingContext.updateLoading();
            console.log('...Abriendo ventana emergente para loguear');
            console.log(result);
        }
        catch(error){
            console.log(error)
        }
    }

    const onOpenPopup = ()=>{
        const popup = document.querySelector('.popupLogin');
        popup.className += ' open'; 
    }

    const onClosePopup = ()=>{
        const popup = document.querySelector('.popupLogin');
        popup.className = 'popupLogin'; 

    }

    const onclickMenuList = ()=>{
        let  navbarContaineMovil = document.querySelector('.navbarContainerMovil');

        if(navbarContaineMovil.className === 'navbarContainerMovil'){
            navbarContaineMovil.className += ' openNavbarContainerMovil';
        }
        else if(navbarContaineMovil.className === 'navbarContainerMovil openNavbarContainerMovil'){
            navbarContaineMovil.className = 'navbarContainerMovil';
        }
    }

    return(
        <>
            <div className='navbarContainer'>
                <div className='navbarWrapper'>
                    <div className='logoContainer'>
                        <Logo />
                    </div>
                    <div className={ user.isLogin ? 'navigationContainer navigationContainerLogined' : 'navigationContainer'}>
                        <nav>
                            <ul className='menuList'>
                                <li className='search-button'>
                                <Link to='/search-teacher'>Buscar Profesores</Link> 
                                </li>
                                <li>

                                <Link to='/about-us'>Sobre Nosotros</Link> 
                                </li>
                                <li>
                                    <a 
                                        href='https://wordpress.org/' 
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        Blog
                                    </a>
                                </li>
                                <li className='help-button'>
                                    <button>Ayuda</button>
                                    <ul className='submenuHelp'>
                                        <li>
                                            <Link to='/support'>Soporte</Link>
                                        </li>
                                        <li>
                                            <Link to='/faq'>Preguntas Frecuentes</Link>
                                        </li>
                                        <li>
                                            <Link to='/contact-us'>Contáctenos</Link>
                                        </li>
                                        <li>
                                            <Link to='/how-use-app'>¿Como usar la app?</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={ user.isLogin ? 'navbarLogin navbarLoginLogined' : 'navbarLogin'}>
                        <Login />
                    </div>
                </div>
            </div>

            <div className='navbarContainerMovil'>
                <div className='NavbarMovil'>
                    <button className='ToogleNavMovil' onClick={onclickMenuList}>
                        <Down />
                        <Logo />
                    </button>
                    <div className='LoginNavMovil'>
                        <Link to='/search-teacher'>
                            <SearchIcon />
                            Profesores
                        </Link>
                        {
                            user.isLogin
                            ? (
                                <div className='userNavMovil'>
                                    <Link to='/classes'>
                                        Clases
                                    </Link>
                                    <img src={user.user.photoURL} alt=""/>
                                </div>
                            )

                            : (
                                <button onClick={onOpenPopup}>
                                    Ingresar o Registrarse
                                </button>
                            )
                        }
                    </div>
                </div>
                <ul className='menuListMovil'>
                    <li>
                        <Link to='/faq' onClick={onclickMenuList}>
                            Preguntas Frecuentes
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-us'onClick={onclickMenuList}>
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog' onClick={onclickMenuList}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to='/faq' onClick={onclickMenuList}>
                            Enseña
                        </Link>
                    </li>
                    <li>
                        <Link to='/faq' onClick={onclickMenuList}>
                            Aprende
                        </Link>
                    </li>
                    <li>
                        <Link to='/privacy-policies' onClick={onclickMenuList}>
                            Privacidad
                        </Link>
                    </li>
                    <li>
                        <Link to='/terms-and-conditionals' onClick={onclickMenuList}>
                            Terminos
                        </Link>
                    </li>
                    <li>
                        <button >
                            Ayuda
                        </button>
                        <ul>

                        </ul>
                    </li>
                </ul>
                <div class='popupLogin'>
                    <button className='closePopupLogin' onClick={onClosePopup}>
                        <CancelIcon />
                    </button>
                    <h3>Ingresa o Registrarse con las siguiestes opciones</h3>
                    <div className='optionsAuthenticationContainer'>
                        <button className='btnGoogle' onClick={onClickGoogle}>
                            Google
                            <GoogleIcon />
                        </button>

                        <button className='btnFacebook'>
                            Facebook
                            <FacebookIcon />
                        </button>

                        <button className='btnApple'>
                            Apple ID
                            <AppleIcon />
                        </button>
                     </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;