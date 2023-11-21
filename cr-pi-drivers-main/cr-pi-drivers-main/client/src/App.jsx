import React, {useEffect, useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landingpage/LandingPage'
import Home from "./components/Home";
import Detail from "./components/cards/Detail"
import axios from "axios"
import CreateNewDriver from "./components/createNewDriver/CreateNewDriver"

function App() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchDrivers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers`);
      console.log("lista actualizada", response.data);
    } catch (error) {
      console.error("error fetchting drivers:", error.message);
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchDrivers()
  }, []);
  if (loading) {
  return <div>loading...</div>
}

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
          
        <Route path="drivers" element={<Home drivers={drivers} />} />
      </Routes>
    </Router>
  )
}

export default App
