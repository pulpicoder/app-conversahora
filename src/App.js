// Import React
import React, {useState, useEffect } from 'react';

// Import Components
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ViewDraft from './components/ViewDraft/ViewDraft';
import Search from './components/Search/Search';
import UserContext from './components/User/UserContext';
import {auth} from './firebase';
import Loading from './components/Loading/Loading';
import LoadingContext from './components/Loading/LoadingContext';

// Import styles of component App
import './App.css';


function App() {

  const userInitialize = {
    user: {},
    isLogin: false,
  };

  const [user, setUser] = useState(userInitialize);

  const updateLoadingHandle = ()=>{
    setLoading((prevState)=>{
      return {
        ...prevState,
        isLoading: !prevState.isLoading
      }
    });
  }

  const [loading, setLoading] = useState({
    isLoading: true,
    updateLoading: updateLoadingHandle
  });

  const getUser = ()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUser({
          user,
          isLogin: true,
        });

        setTimeout(()=>{
          setLoading({
            isLoading: false,
            updateLoading: updateLoadingHandle
          });
        }, 3000);

      }
      else{
        setUser({
          user: {},
          isLogin: false,
        });

        setTimeout(()=>{
          setLoading({
            isLoading: false,
            updateLoading: updateLoadingHandle
          });
        }, 3000);

        console.log('No hay usuario Logiado')
      }
    });
  }

  useEffect(()=>{
    getUser();
  }, []);

  return (
    <LoadingContext.Provider value={loading}>
        <UserContext.Provider value={user}>
          <div className="App">
            {loading.isLoading && <Loading /> }
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <ViewDraft title='Home Page' />
              </Route>

              <Route exact path='/search-teacher'>
                <Search />
              </Route>

              <Route exact path='/about-us'>
                <ViewDraft title='Sobre Nosotros' />
              </Route>

              <Route exact path='/faq'>
                <ViewDraft title='Preguntas Frecuentes' />
              </Route>

              <Route exact path='/how-use-app'>
                <ViewDraft title='Como usar la APP' />
              </Route>

              <Route exact path='/support'>
                <ViewDraft title='Soporte' />
              </Route>

              <Route exact path='/contact-us'>
                <ViewDraft title='Contáctenos' />
              </Route>

              <Route exact path='/terms-and-conditionals'>
                <ViewDraft title='Terminos y Condiciones' />
              </Route>

              <Route exact path='/privacy-policies'>
                <ViewDraft title='Politicas de Privacidad' />
              </Route>

              <Route exact path='/billing'>
                <ViewDraft title='Creditos y Facturación' />
              </Route>

              <Route exact path='/account'>
                <ViewDraft title='Mi Cuenta y Perfil' />
              </Route>

              <Route exact path='/classes'>
                <ViewDraft title='Salon de Clases' />
              </Route>

              <Route path=''>
                <ViewDraft title='404' />
              </Route>
              
            </Switch>
            <Footer />
          </div>
        </UserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
