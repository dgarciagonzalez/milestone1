import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import NavBar from "./components/NavBar.jsx";
import ProgressSummary from "./components/ProgressSummary.jsx";
import CourseCard from "./components/CourseCard.jsx";
import CourseList from "./components/CourseList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
        <ProgressSummary />
        <CourseList/>
        <CourseCard/>

    </>
  )
}

export default App
