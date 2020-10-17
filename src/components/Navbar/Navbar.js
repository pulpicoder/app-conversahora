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
import {ReactComponent as ClassesIcon} from '../../assets/classes.svg';
import {ReactComponent as SettingIcon} from '../../assets/setting.svg';
import LoadingContext from '../Loading/LoadingContext';
import firebase from 'firebase/app';
import {auth} from '../../firebase';




const Navbar = ()=>{

    const user = useContext(UserContext);

    const loadingContext = useContext(LoadingContext);

    const onClickGoogle = async ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();

        try{
            console.log('...Abriendo ventana emergente para loguear');
            const result = await auth.signInWithPopup(provider);
            console.log(result);
            loadingContext.updateLoading();
            console.log('Cargando.....');
            onClosePopup();
            console.log('Cerrando Popup Login');
        }
        catch(error){
            console.log(error);
            onOpenPopup();
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

    const onclickMenuItem = ()=>{
        onclickMenuList();
        window.scrollTo(0, 0);

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
                        <Link to='/search-teacher' onClick={()=> window.scrollTo(0, 0)}>
                            <SearchIcon />
                            Profesores
                        </Link>
                        {
                            user.isLogin
                            ? (
                                <div className='userNavMovil'>
                                    <Link to='/classes' onClick={()=> window.scrollTo(0, 0)}>
                                        <ClassesIcon />
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
                    {
                        user.isLogin && (
                            <div className='optionsUserMovil'>
                                <span>
                                    {user.user.displayName}
                                </span>
                                <Link to='/setting-movil' onClick={onclickMenuItem}>
                                    <SettingIcon />
                                </Link>
                            </div>
                        ) 
                    }
                    <li>
                        <Link to='/faq' onClick={onclickMenuItem}>
                            Preguntas Frecuentes
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-us'onClick={onclickMenuItem}>
                            Nosotros
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <Link to='/blog' onClick={onclickMenuItem}>
                            Blog
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <Link to='/faq' onClick={onclickMenuItem}>
                            Enseña
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <Link to='/faq' onClick={onclickMenuItem}>
                            Aprende
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <Link to='/privacy-policies' onClick={onclickMenuItem}>
                            Privacidad
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <Link to='/terms-and-conditionals' onClick={onclickMenuItem}>
                            Terminos
                            <Down />
                        </Link>
                    </li>
                    <li>
                        <button >
                            Ayuda
                            <Down />
                        </button>
                        <ul>

                        </ul>
                    </li>
                </ul>
                <div class='popupLogin'>
                    <div className='formLogin'>
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
            </div>
        </>
    );
}

export default Navbar;