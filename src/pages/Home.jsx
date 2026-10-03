import Homecard from '../components/Homecard';
import Active from '../components/Active'
import Homedesing from '../components/Homedesing'
import {apicard} from '../context/Recipescontex'
import Cusine from '../components/Cusine'
import { useContext } from 'react';



// import second from 'first'
// import "./Home.scss"


const Home = () => {
const recipesapi = useContext(apicard);
// console.log(apicard);
//   console.log("ye reci",recipesapi);
  
  return (
    <div  className='home-page'>
<Homedesing/>
   <Homecard data={recipesapi.Recipes} />
   <Cusine/>
    <Active/>
    </div>
  )
}
export default Home
