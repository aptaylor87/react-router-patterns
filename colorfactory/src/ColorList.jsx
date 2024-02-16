import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
    return (
        <div className="ColorList">
            <div>
                <h1>Welcome to the color factory</h1>
                <Link to='new'>Add a new Color</Link>
            </div>
            <h1>Please Select a Color:</h1>
            {colors.map(color => (
                <Link to={`/colors/${color.name}`} key={color.name}>{color.name}</Link>
            ))}
        </div>
    )
}

export default ColorList;