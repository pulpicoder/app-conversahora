// Import React
import React, {useContext} from 'react';

// Import styles of component Footer
import './style/Login.css';
import {ReactComponent as AppleIcon} from '../../assets/apple.svg';
import {ReactComponent as FacebookIcon} from '../../assets/facebook.svg';
import {ReactComponent as GoogleIcon} from '../../assets/google.svg';
import {ReactComponent as BellIcon} from '../../assets/bell.svg';
import firebase from 'firebase/app';
import {auth} from '../../firebase';
import UserContext from '../User/UserContext';
import {Link} from 'react-router-dom';
import {ReactComponent as Down} from '../../assets/down.svg';
import LoadingContext from '../Loading/LoadingContext';

const Login = ()=>{

     const loadingContext = useContext(LoadingContext);

    const logoutHandle = async()=>{
        try{
            await auth.signOut();
            loadingContext.updateLoading();
            console.log('Usuario cerro sesion');

        }
        catch(error){
            console.log(error);
        }
    }

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

    const user = useContext(UserContext);

    const loginWithoutUser =(
    <div className='loginContainer'>
        <h4>Ingrese con</h4>
        <div className='optionsAuthenticationContainer'>
            <button className='btnGoogle' onClick={onClickGoogle}>
                <GoogleIcon />
            </button>

            <button className='btnFacebook'>
                <FacebookIcon />
            </button>

            <button className='btnApple'>
                <AppleIcon />
            </button>
        </div>
    </div>);

    const userNav = (
        <div className='userNavbarContainer'>
            <div className='userListContainer'>
                <button className='userNav'>
                    <div className='userNavMetaDataContainer'>
                        <strong>{user.user.displayName}</strong>
                        <span>Desconocido</span>
                    </div>
                    <div className='usernameAvatarContainer'>
                        <img src={user.user.photoURL} alt=""/>
                        <span>
                            <Down />
                        </span>
                    </div>
                </button>
                <ul className='userList'>
                    <span className='userListUserName'>{user.user.displayName}</span>
                    <li>
                        <Link to='/billing'>Creditos y Facturación</Link>
                    </li>
                    <li>
                        <Link to='/account'>Mi Cuenta y Perfil</Link>
                    </li>
                    <li>
                        <button onClick={logoutHandle}>
                            Cerrar Sesión
                        </button>
                    </li>
                    <li>
                        <Link to='/classes' className='classes'>
                            Salon de Clases
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='notificationNavContainer'>
                <button>
                <BellIcon />
                <span className='numberNotifications'>0</span>
                </button>
                <ul className='Notifications'>
                    <h4>No Hay Notificaciones</h4>
                </ul>
            </div>
        </div>
    );

    return(
        <>
            {
                user.isLogin 
                    ? userNav
                    : loginWithoutUser
            }
        </>
    );
}

export default Login;