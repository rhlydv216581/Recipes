import { useContext, useState } from "react"
import {apicard} from '../context/Recipescontex'
import "./Active.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Homecard from '../components/Homecard';


const Active = () => {
  const recipes  = useContext(apicard)
  const [active,setactive] =  useState('Breakfast');
// console.log("ye recipes hai ",recipes.Recipes.map((item)=>(item.mealType[0])));
const mealTypes = recipes.Recipes.map((item) => item.mealType[0]);
console.log(mealTypes);

const show = recipes.Recipes.filter(
  (item) => item.mealType[0] === active
);
console.log(show);


console.log(active);


   

  return (
<>
<div className='Activetab'>
  

     <div    className={active === "Breakfast" ? "active" : ""}
     onClick={()=> setactive("Breakfast")}
     >
      <span>
        <h1>Breakfast</h1>
      </span>
     </div>
     
     <div  className={active === "Lunch" ? "active" : ""}
     onClick={()=> setactive("Lunch") }>
      <span>
        <h1>Lunch</h1>
      </span>
     </div>
     <div  className={active === "Dinner" ? "active" : ""}
     onClick={()=> setactive("Dinner")}>
      <span>
        <h1>Dinner</h1>
      </span>
     </div>
    
    
   
    
    </div>

<Homecard data={show} />

<div className='Activetab'>
<div
  className={active === "Dessert" ? "active" : ""}
  onClick={() => setactive("Dessert")}
>
  <span>
    <h1>Dessert</h1>
  </span>
</div>

<div
  className={active === "Snack" ? "active" : ""}
  onClick={() => setactive("Snack")}
>
  <span>
    <h1>Snack</h1>
  </span>
</div>

<div
  className={active === "Appetizer" ? "active" : ""}
  onClick={() => setactive("Appetizer")}
>
  <span>
    <h1>Appetizer</h1>
  </span>
</div>

<div
  className={active === "Beverage" ? "active" : ""}
  onClick={() => setactive("Beverage")}
>
  <span>
    <h1>Beverage</h1>
  </span>
</div>
</div> 
</>
  )
}

export default Active
