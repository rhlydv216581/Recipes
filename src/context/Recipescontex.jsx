import axios from '../utils/axios';
import { createContext, useEffect, useState } from "react";
export const apicard = createContext();
export const Recpicesformdata = createContext() // ye same naam he kyu ki variale same export ka naam he use karta hai 
const Recipescontex = ({children}) => {
  useEffect(()=>{
     const getRecipes = async () => {
      // https://dummyjson.com/recipes?limit=50"
    try {
      const request =  await axios.get("/recipes?limit=50");
      setRecipes(request.data.recipes)
      console.log(request.data.recipes);
      // setformdata(request.data.recipes)
    } catch (error) {
      console.log(error);
    }
  }
    getRecipes();
}, []);
    const [Recipes, setRecipes] = useState([ 
   ]);
    const [formdata, setformdata] = useState([
      JSON.parse(localStorage.getItem("formdata"))
    ])
  return (
    <div>
        <Recpicesformdata.Provider value={{formdata, setformdata}}>
       
              <apicard.Provider value={{ Recipes, setRecipes }}>
            {children}
              </apicard.Provider>
            </Recpicesformdata.Provider>  
    </div>
  )
}
export default Recipescontex
//  y add karna hai nutriston calculatore and dark ling ode bhi 
