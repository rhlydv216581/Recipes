// https://chatgpt.com/share/6abccd6b-f9a4-83e8-b43d-dcc390f1ef00

import Homecard from '../components/Homecard'
import React, { useContext, useState } from 'react'
import {Recpicesformdata} from '../context/Recipescontex'
import { Link, useParams } from 'react-router-dom'
import {apicard} from '../context/Recipescontex';
// import card from '../components/Recipescard';
import "./Showrecipes.scss"
// console.log( "ye contex",formdata);

// useState
// useParams() actually kya karta hai?
// useParams() URL se dynamic parameter ki value nikalta hai.
//  like react ko pata kaisa chalega ki konsa id hai ye url mai browser ko pata haina
const Singlerecipes = () => {
  // const a = useParams()
  // console.log("hiiii");
  
  // console.log(a.id);
  // --------- ye param sa id le rahu jho url mai hai 
const { id } = useParams();
// console.log(id);
// eksingleformdata
 const [activeTab, setActiveTab] = useState("ingredients");
//  ---------------------
const {formdata} = useContext(Recpicesformdata) //ye variable store kar deya  fir tuja data chhya hoga tho formdaart 
const {Recipes} = useContext(apicard)
// console.log(eksingleformdata);
// console.log("yecontex",formdata);

// ye match karrahu param ki id aur formdata.id hai ussa match kar rahai -----------------
const currentrecipes = formdata.find(
  (currentrecipes) => currentrecipes.id == id
);
const apidata = Recipes.find(
  (apidata) => String(apidata.id) == String(id)
  //  (recipe) => String(recipe.id) === String(id)
);
// console.log(currentrecipes.
// selected);
// console.log(formdata);


// const result = formdata.selected.filter(item=> item == currentrecipes.selected )
// console.log(result);

// console.log("ye url mai id hai vo he id hai param sa data leya hai",currentrecipes.id);
  // console.log(eksingleformdata);
   return (
     <div className="singlerecipes">
      {/*  Header - Top par full width */}
      <div className="header">
        
        <h1 className="title">{currentrecipes?.Name} {apidata?.name}</h1>
       
      </div>

      {/* Main Content - 2 columns on laptop */}
      <div className="main-content">
        {/* LEFT: Hero Image */}
        <div className="left-side">
          <div className="hero-image">
 <img
    src={currentrecipes?.Imagelink || apidata?.image}
    alt=""
  />
   </div>
        </div>

        {/* RIGHT: Meta + Tabs + Content */}
        <div className="right-side">
          {/* Meta Info */}
          <div className="meta-info">
            <div className="meta-item">
              <span className="meta-label">Cook time</span>
              <span className="meta-value">⏱ {currentrecipes?.Timing} {apidata?.cookTimeMinutes}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Serves</span>
              <span className="meta-value">  👥 {apidata?.servings || "2 persons"}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Catogory</span>
              <span className="meta-value">{ currentrecipes?.selected || apidata?.cuisine}</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <span
              className={`tab ${activeTab === "ingredients" ? "active" : ""}`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </span>
            <span
              className={`tab ${activeTab === "instructions" ? "active" : ""}`}
              onClick={() => setActiveTab("instructions")}
            >
              Instructions
            </span>
            <span
              className={`tab ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Related Recipes
            </span>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "ingredients" && (
              <div className="ingredients-list">
                {/* ye normal hai bus ingrateka use kar rahai tho magar abhi muja api bhi  karna hai tho api walla clicked kiya tho ye aaya nhi tho created walla hoga  */}
                {/* // {currentrecipes.Ingrdients.map((item, index) => (   */}  
                  {(currentrecipes?.Ingrdients || apidata?.ingredients || []).map((item, index) => (
                  <div className="ingredient-row" key={index}>
                    <span className="ingredient-name">• {item}</span>
                    <span className="ingredient-qty">gram</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "instructions" && (
              <div className="instructions-list">
                {/* {currentrecipes.Instruction.map((item, index) => ( */}
                {(currentrecipes?.Instruction || apidata?.instructions || []).map((item, index) => (
                  <div className="instruction-row" key={index}>
                    <span className="instruction-number">{index + 1}.</span>
                    <p className="instruction-text">{item}</p>
                  </div>
                ))}

                <div className="instruction-image">
                  <img
                     src={currentrecipes?.Imagelink || apidata?.image}
                    alt="loading"
                  />
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="reviews-list">

  {/* Formdata related recipes */}
  {formdata
    .filter((recipe) => recipe.selected === apidata?.cuisine)
    .map((recipe, index) => (
      <Link
        to={`/Recipes/detail/${recipe.id}`}
        className="review-card"
        key={`form-${recipe.id}`}
      >
        <img src={recipe.Imagelink} alt="" />

        <div className="wrap">
          <div className="top">
            <h3 className="same">
              Dish Name : {recipe.Name}
            </h3>

            <h3 className="same">
              Chef Name : {recipe.Chefname}
            </h3>
          </div>

          <p>{recipe.Despreaction.slice(0, 25)}</p>

          <span className="review-category">
            {recipe.selected}
          </span>
        </div>
      </Link>
    ))}


  {/* API related recipes */}
  {Recipes
    .filter((recipe) => recipe.cuisine === apidata?.cuisine)
    .map((recipe) => (
      <Link
        to={`/Recipes/detail/${recipe.id}`}
        className="review-card"
        key={`api-${recipe.id}`}
      >
        <img src={recipe.image} alt={recipe.name} />

        <div className="wrap">
          <div className="top">
            <h3 className="same">
              Dish Name : {recipe.name}
            </h3>

            <h3 className="same">
              Cuisine : {recipe.cuisine}
            </h3>
          </div>

          <p>
            {recipe.instructions?.[0]?.slice(0, 25)}
          </p>

          <span className="review-category">
            {recipe.cuisine}
          </span>
        </div>
      </Link>
    ))}

</div>
            )}
            {/* console.log(recipe); */}
            
          </div>
        </div>
      </div>
    </div>
  );
};
  
        {/* console.log(Instruction); */}

      //  
      


 
//  {/* <h1>{currentrecipes.Name}</h1>
//      <h2>{currentrecipes.
// Despreaction
// }</h2>
// <h1>{currentrecipes.Chefname}</h1>
// <p>{currentrecipes.Timing}</p>
// {currentrecipes.selected}
//   {currentrecipes.Ingrdients.map((item, index) => (
//     <h2 key={index}>{item}</h2>
//   ))}
//     {currentrecipes.Instruction.map((item, index) => (
//     <h2 key={index}>{item}</h2>
//   ))}  */}
    // </div>
 

export default Singlerecipes


//  <svg width="0" height="0">
//   <defs> 
//     <clipPath id="recipeCurve" clipPathUnits="objectBoundingBox">
//       <path d="
//         M 0 0
//         L 1 0
//         L 1 0.3574
//         Q 0.1488 0.9956 0.0217 0.5131
//         L 0 0
//         Z
//       " />
//     </clipPath>
//  </defs> 
//  </svg> 



// understand like bhul jha rahu ithan sab dekh kar 