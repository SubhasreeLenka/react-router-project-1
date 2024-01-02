import  {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import First from "./Components/First";



function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/first" element = {<First/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
