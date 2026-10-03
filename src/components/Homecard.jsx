import { useContext } from "react";
import { apicard } from "../context/Recipescontex";
import { Link } from 'react-router-dom'
import Cusine from '../components/Cusine';
import "./Homecard.css"

// Link
const Homecard = ({data}) => {
  const recipesapi = useContext(apicard);

  return (
    <div className="Recipeallcard">
  
      {data.map((item) => (
        
        // <Lense> 
        <Link to={`/Recipes/detail/${item.id}`}
        key={item.id}
        className="Recipecard"
        style={{
            backgroundImage: `url(${item.image
})`,
         
          }}
          >
            <div className="info">
  <div className="top">
     <h1>{item.cuisine
}
</h1> 

       <h1>{item.cookTimeMinutes
}</h1>
       
  </div>
  <div className="bottom">
 {/* <p>
  {item.ingredients?.length > 100
    ? item.ingredients.slice(0, 100) + " more..."
    : item.ingredients || "No description"
  }
</p> */}
  {/* <H4>{CALORIES}</H4> */}
  <div className="wrap">

  <h2>{item.mealType}</h2>
  <h2>{item.name}</h2>
  </div>
  {/* <button> Info</button> */}
  <button onClick={()=>(console.log("youclicked")
  )}
   > Info</button>
  </div>
  
     </div>
        </Link>
      ))}
    </div>
  );
};

export default Homecard;