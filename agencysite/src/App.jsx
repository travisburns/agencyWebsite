import {BrowserRouter } from "react-router-dom";
import {Banner, Hero, Navbar, Services} from './components';
import './App.css'


const App = () => {



 return (
    <BrowserRouter>
  
    <div className='relative z-0 bg-black	'>
    <Banner />
    <Navbar />
    <Hero />
    <Services />
    </div>
    </BrowserRouter>
 )
}

export default App
