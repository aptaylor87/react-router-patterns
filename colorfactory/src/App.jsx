import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import ColorForm from './ColorForm'
import ColorList from './ColorList'
import ColorDetail from './ColorDetail';

import './App.css'

function App() {
  const [colors, setColors] = useState([])

  function addColor(newColor) {
    setColors(colors => [...colors, newColor])
  }

  return (
    <Routes>
      <Route path="/colors" element={<ColorList colors={colors}/>} />
      <Route path="/colors/new" element={<ColorForm addColor={addColor}/>} />
      <Route path="/colors/:name" element={<ColorDetail colors={colors}/>} />
    </Routes>
    
  )
}

export default App
