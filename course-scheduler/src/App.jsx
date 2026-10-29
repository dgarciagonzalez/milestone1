import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavBar from "./components/NavBar.jsx";
import ProgressSummary from "./components/ProgressSummary.jsx";
import CourseCard from "./components/CourseCard.jsx";
import CourseList from "./components/CourseList.jsx";
import useFetch from "./hooks/useFetch";

function App() {
  const [count, setCount] = useState(0)
    const { data } = useFetch("http://localhost:3000/courses");
    console.log("Courses:", data);
  return (
    <>

      <NavBar />
        <h1 style={{ textAlign: "left", fontSize: 22, color: "black", paddingLeft: 20, letterSpacing: 0}}>
          CS Developer Track
        </h1>
        <Routes>
          <Route path="/" element={<HomePage courses={data}/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>


    </>
  )
}

export default App
