import {BrowserRouter } from "react-router-dom";
import {Banner, Hero, Navbar, Services} from './components';
import './App.css'
import StarsCanvas from "./components/canvas/Stars";


const App = () => {



 return (
    <BrowserRouter>
  
    <div className='relative z-0 bg-black	'>


    
    <Navbar />
    <Hero />
    <StarsCanvas />
    
    <Services />
    </div>
    </BrowserRouter>
 )
}

export default App
