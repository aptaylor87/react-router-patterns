import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ColorDetail({ colors }) {

    const { name } = useParams()
    const navigate = useNavigate();
    const detailColor = colors.find(color => color.name === name)
    if (!detailColor) {
        navigate('/colors')
    }

    const divStyle = {
        backgroundColor: detailColor.color,
        padding: '20px', 
        color: 'white', 
    };
    return (
        <div className="ColorDetail" style={divStyle}>
            <h1>This is {detailColor.name}</h1>
            <h1>Isn't it beautiful?</h1>
            <Link to={`/colors`}>Go Back</Link>
        </div>
    )
}

export default ColorDetail;