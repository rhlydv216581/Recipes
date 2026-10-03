  import { NavLink } from "react-router-dom";
  import  {useState} from 'react';
  import "./Nav.scss";
  import LOGO from "../assets/Logo.jpg";
  import Lens from "./Lense";
  const Nav = () => {
     // useState use kar rahe hain value store karne ke liye
  // isOpen ki initial value true hai (matlab navbar close hai ya close hai shuru mein)
    const [isOpen ,setIsOpen]= useState(true)
    console.log("isOpen:", isOpen);
    
    return (
       // Template literal use kiya hai className ke liye
    // Agar isOpen true hai toh "navbar active" lagega, warna sirf "navbar" ye scss mai dekhna ok 
      <div className={`navbar ${isOpen ? "active" : ""}`}>
        <div className="logo">
           <Lens>
          <img src={LOGO} alt = "load.."/>
           </Lens>
        </div>
        <div className={`navlink `}>
 {/* NavLink use kar rahe hain URL change karne ke liye
            jab click hoga toh route se match hoga aur page change ho jayega */}
            {/* className={({ isActive }) => (isActive ? "navlinkactive" : "")} 
             React Router ke andar NavLink component khud banata hai isActive ko, aur usko tumhare className function mein bhej deta hai.
                mean tu clicked karega tho vo isactive banata issa ki value true or flase hai clicke karega tho true  nhi tho flase hai aur tuna vo he bheja isactive true hai
              tho scss mai line number 41 chala
            */}
        <NavLink   className={({ isActive }) => (isActive ? "navlinkactive" : "")} to="/">Home</NavLink>
        <NavLink   className={({ isActive }) => (isActive ? "navlinkactive" : "")} to="/about">About</NavLink>
        <NavLink   className={({ isActive }) => (isActive ? "navlinkactive" : "")} to="/Recipes">Recipes</NavLink>
        <NavLink  className={({ isActive }) => (isActive ? "navlinkactive" : "")} to="/Createrecipes">Create Recipes</NavLink>
        </div>
          {/* Button pe click karne se setIsOpen(!isOpen) chalega
          matlab agar true hai toh false ho jayega, false hai toh true */}
          <button className="nav-toggle-button" type="button"  onClick={() => {
    console.log("Button clicked");
    console.log("ye value default hai aur ulta karna sa phale walla value hai ");
    // !  ( isopen  menu ka hai ok open ya close ) 
    setIsOpen(!(isOpen));  // ye haia checked karta hai phale purana/default valu (agara phale baar kar rahai)
    //  value ka lega fr ussa ! ulta kar dega change kardega  
    // jaisa  line 9 mai true fir clicked kiya tho value aarahai tab bhi true  fir ! chala ussa ka baad valye change huva flase  tu vo nect line mai dekh sakt hai 
    // mean order hai 1defaul (true) value 2 clicked tab bhi (true) 3 ussa ka baad ! laga aur value change huva (flase) ye sab ye ek line sa huva hai  (!(isOpen)); ussa nect line mai dekh saki hai 
    console.log("isopen", isOpen); // ussa ki value edar dekh rahai  
    
  }}  >

 ☰
        </button>
      </div>
    );
  };

  export default Nav;
  
