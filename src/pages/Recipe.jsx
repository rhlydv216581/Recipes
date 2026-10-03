import Recipescard from '../components/Recipescard'
import {apicard} from '../context/Recipescontex'
import Homecard from '../components/Homecard'
import "./Recipes.css"
import icone from '../assets/cupcake.svg'
import { useContext } from 'react'
const Recipes = () => {

  const recipesapi = useContext(apicard);

  
  return (
    <div className='showrecipes'>
      <h1  className="created-title">  <img src={icone} alt="" /> Your Created Recipes</h1>
      <Recipescard  />
      <h1  className="created-title" ><img src={icone} alt="" /> Different type of  Recipes </h1>
      <Homecard data={recipesapi.Recipes} />
    </div>
  )
}

export default Recipes
