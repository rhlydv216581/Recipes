import React from 'react'
import Home from './pages/Home';
import  Createrecipes from './pages/Createrecipes';
import About from './pages/About';
import Recipes from './pages/Recipe';
import Nav from './components/Nav';
import Mainroute from './routes/Mainroute.jsx';

// import "./Appcss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"

import Recipescontex from './context/Recipescontex';
const App = () => {
  return (
    <Recipescontex>


    <div className="main">
      <Nav/>
      <Mainroute/>
    </div>

    </Recipescontex>

  )
}

export default App
// dekh mai nav or route kyu use kar rahau dekh nav sa url change hoga aur route vo url match hoga tab vo page dekhga  issa  leya main route use kiya maina 
// agara tu nav nhi banna ua ga url manulay change karga tho bhi change hoga nav issa leya kiya kyu ki url xcnage ho aur match route se tho react ko pat chalega ki page change karana hai 
// 