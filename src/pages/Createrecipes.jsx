import "./Createrecipes.scss"
import option_thinking from '../assets/business-man-thinking-of-several-options-svgrepo-com.svg'
import Head from '../assets/Head.png';
import person from "../assets/person-svgrepo-com.svg";
import ingredients from '../assets/ingredients-svgrepo-com.svg';
import Instructions from '../assets/book-and-pen-svgrepo-com.svg';
import image from '../assets/camera-image-photo-svgrepo-com.svg';
import Timing from "../assets/limited-time-offer-timing-svgrepo-com.svg";
import information from '../assets/information-service-support-svgrepo-com.svg';
import {useForm} from 'react-hook-form'
import { useContext } from "react"; //useconteximport 
import {Recpicesformdata} from '../context/Recipescontex' // ye export walla jho mai contexsa export kiya 
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';

const Createrecipes = () => {
  const navigated = useNavigate();
    const { formdata , setformdata } = useContext(Recpicesformdata); //contexapi 
 
    const {register,handleSubmit,reset,formState:{errors},watch
  }=useForm();

 
  function submite(data) {
    // console.log("🔥 SUBMITE FUNCTION CHALA");
    data 
    data.id = nanoid();
    // console.log(data);
    setformdata([...formdata,data])
    console.log(formdata);
    localStorage.setItem("formdata", JSON.stringify(data));
    toast.success("you created recipes",{
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#F1E5D1',
  },
})
    navigated("/Recipes")
//     ...formdata = "purani data save karega aur naya daat karega data sa "
   reset();
   
  }
  console.log("Context ka data:", formdata);
  return (
    <div className="create-recipes">
      {/* console.log("RENDER hua"); */}
     

      {/* <h2>create reacipes</h2> */}
      <img src={Head}   alt="" />
     
      {/* <img src={Chef} id="Chef" alt="" /> */}
  <form className="form-box" onSubmit={handleSubmit(
    submite,
    (errors) => console.log("❌ FORM ERRORS:", errors) // issa pata chal rahai konsa mai error aara hai
  )}  >
  <label htmlFor="Name">
     {/* <div className="wrap">  */}

     <img src={person} alt="" />
     <div className="wrap">

  <input type="text" name="Name" placeholder="Name" {... register("Name",{
    required : "naam likha pana",
    minLength : {
      value : 3,
      message : "kaam sa kaaam 3 leeter hona chhya "
    },
   pattern: {
  value: /^[A-Za-z ]+$/,
  message: "Only letters allowed"
},
    validate : (value) => {
      return value.trim() !== ""|| " kucha likha space mat chor muja chutiya smjh hai kya blank "
    },
  })}  
  
  />
  {errors.Name && <small>error.Name.message</small> }
  </div>
  </label>
   <label htmlFor="image">
     <img src={image} alt="" />
      <div className="wrap">
        
  <input type="url" placeholder="Imagelink" {...register("Imagelink",{
    required : "share link",
    pattern : {
      value:  /^https?:\/\/.+/i,
      message : "sahi image link daalo (jpg, png, gif, webp)"
    },
    
    validate : (value) => {
      return value.trim() !== ""|| " kucha likha space mat chor muja chutiya smjh hai kya blank "
    },
  })}  />
   {errors.Imagelink && <small>error.Imagelink.message</small> }
  </div>
  </label>
   <label htmlFor="chef">
     <img src="   https://img.freepik.com/premium-vector/minimal-beautiful-female-chef-face-vector-silhouette-silhouette-black-color-white-background-16_666870-992.jpg?w=2000
  " alt="" />
 <div className="wrap"> 
  <input type="text" name="Name" placeholder="Chef Name" {...register("Chefname",{required : "plz enter chef namer",
  minLength :{
    value : 3,
    message : " plz entre  correct name "
  },
  pattern: {
  value: /^[A-Za-z ]+$/,
  message: "Only letters allowed"
},

    validate : (value) => {
      return value.trim() !== ""|| " kucha likha space mat chor muja chutiya smjh hai kya blank "
    },
  })}  />
   <small>{errors.Chefname?.message}</small> 
 </div>
  </label>
  <label htmlFor="desprection">
     <img src={information} alt="" />
      <div className="wrap">

  <textarea type="type"  placeholder="Desprection of Food"  {...register ("Despreaction", {required : "kuch likha issa k bara mai ",
    minLength :{
      value :10,
      message : " min 3 to 4 word write "
    },
   pattern: {
  value: /^[A-Za-z0-9 .,'\-!?()&:;/]+$/,
  message: "Only letters and numbers are allowed"
},

    validate : (value) => {
      return value.trim() !== ""|| " kucha likha space mat chor muja chutiya smjh hai kya blank "
    },
  }
   
  )} />
 <small>{errors.Despreaction?.message}</small> 
 {/* {errors.Despreaction?errors}  */}
      </div>
  </label>
   <label htmlFor="ingredients">
     <img src={ingredients} alt="" />
      <div className="wrap">

  <input type="text" name="ingredients" placeholder="ingredianted use cmmom to seprated ingrated eg onon,egg " {...register("Ingrdients", {

     validate: (value) => {
      return value.length > 0 || "Kuch ingredients likho";
    },
setValueAs: (value) => {
     return value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 3)  || "Har ingredient minimum 4 characters ka hona chahiye";
},
    pattern: {
 value: /^[A-Za-z,\s]+$/,
  message: "Only lettersand commo(,) no space allowed are allowed"
}
  }
  )} />
  <small>{errors.Ingrdients?.message}
  </small>
      </div>
  </label>
  <label htmlFor="Instructions">
     <img src={Instructions} alt="" /> 
      <div className="wrap">

  <textarea type="type"  placeholder="new step is alway in new line " {...register("Instruction",{
    required : " kuch likha ",
validate: (value) => {
      return value.length > 0 || "Kuch ingredients likho";
    },
// ye value ko array mai converted kar rahu 
    setValueAs: (value) =>
      value
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0),

  })} />
  <small>{errors.Instruction?.message}
  </small>
      </div>
  </label>
  <label htmlFor="Timing">
  <img src={Timing} alt="Timing" />

  <div className="wrap">
    <input
      id="Timing"
      type="time"
      {...register("Timing", {
        required: "Timing likho",

        validate: (value) => {
          return value.trim() !== "" || "Timing blank mat chhodo";
        },
      })}
    />

    <small>{errors.Timing?.message}</small>
  </div>
</label>
   <label htmlFor="selected">
     {/* <img src={ingredients} alt="" /> */}
      <img src={option_thinking} alt="" />
       <div className="wrap">
        <select
  name=""
  id=""
  defaultValue=""
  placeholder="plz entre"
  {...register("selected", {
    required: "selected option from droup down"
  })}
>
  <option value="" disabled>
    Plz selected option
  </option>

  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="snack">snack</option>
  <option value="Dinner">Dinner</option>
</select>
     <small>{errors.selected?.message}
     </small>
       </div>
   </label> 
   <label htmlFor=""></label> 
      <button className="pill-btn" type="submit" onClick={ () =>{ console.log("youclicled")}
      } >
  Save recipes
</button>
  </form>
  {/* <img src="bg.png" alt="" /> */}
  </div>
  )
}
// https://www.figma.com/proto/9JNv0V51lmR4ONuYPZgE5q/Untitled?node-id=11-44&t=qsKf3eQ57sDP00pk-1&utm_source=Pinterest&utm_medium=organic
export default Createrecipes
