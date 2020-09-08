// Import React
import React from 'react';

// Import Components
import {Switch, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

// Import styles of component App
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path='/'>
            <h2>Home</h2>
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
