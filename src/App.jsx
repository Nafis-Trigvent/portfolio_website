
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Project'
// import Skill from './components/Skill'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"


function App() {


  return (
    <div className='max-w-[100%] bg-[#0C1E39] text-white '>
     <Navbar/>
     <Home/>
     <About/>
     <Experience/>
     <Projects/>
     {/* <Skill/> */}
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
