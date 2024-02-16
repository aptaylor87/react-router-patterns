import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({ addColor }) => {
    const [form, updateForm]  = useState({name: "", color: "#000000" });
    const navigate = useNavigate();

    const handleChange = e => {
        const { value, name } = e.target;
        updateForm(formData => ({
          ...formData,
          [name]: value
        }))
      }  

    const handleSubmit = e => {
        
        e.preventDefault();
        addColor(form)
        navigate('/colors')
      }

      return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <input
                type="color"
                name="color"
                value={form.color}
                onChange={handleChange} 
            />
            <button>Submit</button>
        </form>

      )

}

export default ColorForm;