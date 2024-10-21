import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Project} from './components/Project';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Project/>
    <Footer/>
    </div>
  )
}

export default App
