import { Link } from "react-router-dom";
import logo from '../../assets/eugenewebdevlogo.png'

const Navbar = () => {
  
    return (

  <nav className=' w-full flex items-center py-1 fixed top-0 z-20 bg-slate-950' >
    <div className=' flex justify-between items-center max-w-7xl mx-auto'>
      <Link 
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0,0)
      }}
      >
      <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
      <p className='text-white text-[18px] font-bold cursor-pointer flex'>
        Eugene Web Development
      </p>
      </Link>

      <ul className="list-none hidden sm:flex flex-row gap-10 text-white font-semibold">
        <li>Services</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    </div>




      </nav>
  )
}

export default Navbar
