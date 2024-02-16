import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function DogList( { dogs }) {

    const dogNames = dogs.map(dog => dog.name);

    return(
        <ul>
        {dogNames.map(name => (
            <li key={name}>
                <Link to={`/dogs/${name}`}>{name}</Link>
            </li>
        ))}
    </ul>

    )

}

export default DogList;