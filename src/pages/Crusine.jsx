import React, { useContext } from 'react'
import {apicard} from '../context/Recipescontex';
import { useParams } from 'react-router-dom';
import { Home } from 'lucide-react';
import Homecard from '../components/Homecard';
const Crusine = () => {
      const regionalcrusine =useContext(apicard)
      console.log( "ye apika dat ",regionalcrusine.Recipes);
      const { item } = useParams();
      console.log(item);
      const finaldata = regionalcrusine.Recipes.filter(
        (finaldata)=> finaldata.cuisine === item 
      )
      console.log("ye amican",finaldata);
      
  return (
    
    <div className='cruise-page'>
        <Homecard data={finaldata}/>
    </div>
  )
}

export default Crusine
