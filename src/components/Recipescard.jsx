import  { useContext } from 'react'
import "./Recipescard.scss"
import {Recpicesformdata} from '../context/Recipescontex';
import {Link} from 'react-router-dom';
// import {link} from '../pages/Singlerecipes';
const Recipescard = () => {

  const {formdata}= useContext(Recpicesformdata);
  console.log(formdata);
  
  return (
    // const {formdata}= useContext(Recpicesformdata)
    <div className='Recipeallcard' >
      {/* agar .filter(Boolean)  data hai formdata mai tho dekh nhi tho [] ho  nahi tho (localstorage) mai tho shw ho  */}
 {formdata.map((item)=>(
      // <Link to="/Recipes/Singlerecipes">
  // koi bhi elemt ko clicked karu tho muja ussa ka detailpag dekh tho maina params use kar rahu aur rout mai :id hai issa ka matlab ye dynamic id hai 
  //  to={`/Recipes/detail/${item.id}`} 
    <Link  to={`/Recipes/detail/${item.id}`}className="Recipecard" key={item.id} style={{backgroundImage : `url(${item.
Imagelink})`}} >
  {/* <link rel="stylesheet" href="" />    */}
     <div className="info">
  <div className="top">
     <h1>{item.Chefname
}</h1> 
       <h1>{item.Timing
}</h1>
       
  </div>
  <div className="bottom">
 <p>
  {item.Despreaction?.length > 100
    ? item.Despreaction.slice(0, 100) + " more..."
    : item.Despreaction || "No description"
  }
</p>
  {/* <H4>{CALORIES}</H4> */}
  <div className="wrap">

  <h2>{item.selected}</h2>
  <h2>{item.Name}</h2>
  </div>
  <button onClick={()=>(console.log("youclicked")
  )}
   > Info</button>
  </div>
     </div>
    {/* </div> */}
    </Link>
 ))
}
    </div>
  )
}
export default Recipescard
