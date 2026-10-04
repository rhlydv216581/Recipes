import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Crusine from '../pages/Crusine'
import Singlerecipes from '../pages/Singlerecipes'
import About from '../pages/About';
import Recipes from '../pages/Recipe';
import Createrecipes from '../pages/Createrecipes';
import NotFound from '../components/NotFound'
const Mainroute = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/cuisine/:item' element={<Crusine/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/Recipes' element={<Recipes/>} />
       <Route path="*" element={<NotFound />} />
      
       <Route path='/Recipes/detail/:id' element={<Singlerecipes/>} />
       {/* <Route path='/' element = {<Cusine/>} */}
       {/* <Route path='/' */}
       {/* <Route path='/Recipes/detail/:Name' element={<Singlerecipes/>} /> */}
       <Route path='/Createrecipes' element = {<Createrecipes/>} />
    </Routes>
  )
}

export default Mainroute
