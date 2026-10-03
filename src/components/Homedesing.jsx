import { useNavigate } from 'react-router-dom';
import fire from '../assets/fire.svg';
import "./Homedesing.scss"
const Homedesing = () => {
      const navigate = useNavigate();
    function expolrehandle() {
        navigate("./Recipes")
    }
    function createhandle() {
        navigate("./Createrecipes")
    }
  return (
    <div className="homedesing-page">
    <div className="homecontant">

      <h1>Enjoy Your <span>Special</span>
      <br /> Delicious Meal <img src={fire} alt="" />
      </h1>
      <p>We make easy for you to give the same <br /> experce online that they expected with your Door.</p>
    
        <button onClick={expolrehandle} >Expolre</button> <button onClick={createhandle} >Create</button>
    </div>
    </div>
  )
}

export default Homedesing
