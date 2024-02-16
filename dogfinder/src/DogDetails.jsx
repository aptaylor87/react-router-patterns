import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DogDetails( {dogs} ) {
    const { name } = useParams()

    const detailDog = dogs.find(dog => dog.name === name)


    return (
        <div>
        <h1>{detailDog.name}</h1>
        <img src={detailDog.src}></img>
        <h4>Facts</h4>
        <p>Age: {detailDog.age}</p>
        <ul>
            {detailDog.facts.map((fact, idx) => (<li key={idx}>{fact}</li>))}
        </ul>
        
        </div>

    )
 

}

export default DogDetails;


// {
//     name: "Whiskey",
//     age: 5,
//     src: whiskey,
//     facts: [
//       "Whiskey loves eating popcorn.",
//       "Whiskey is a terrible guard dog.",
//       "Whiskey wants to cuddle with you!"
//     ]
//   }