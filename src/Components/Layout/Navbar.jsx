import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeLinks from '@Components/NavbarComponents/HomeLinks'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState('☰');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    setMenuIcon(menuOpen ? '☰' : '✕') // Cambia el ícono del menú
  }

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      className={`p-4 flex justify-between items-center ${isHome ? 'absolute' : 'bg-[#3E6B36] sticky'} w-full box-border z-10 poppins-regular`}>
      <div className='flex-none font-bold'>
        <Link href="/" className='text-white'>DinamicResume</Link>
      </div>
      <div className='flex flex-grow justify-end items-center gap-8'>
        <div className="hidden md:flex gap-4" id="links_navbar">
          <HomeLinks handleScroll={handleScroll} toggleMenu={toggleMenu} />
        </div>
        <div className="hidden md:flex space-x-4 ">
          <Link to="/signin" className="bg-black text-[#3BC020] px-4 py-2 rounded-md">
            Sign In
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="appearance-none border-none text-white bg-transparent text-xl"
          >
            {menuIcon}
          </button>
        </div>
        {menuOpen && (
          
          <div className="absolute top-full right-0 w-full bg-[#3E6B36] md:hidden" id="links_navbar_mobile">
            {isHome && (<HomeLinks handleScroll={handleScroll} toggleMenu={toggleMenu} />)}
            <li className="flex flex-col gap-x-4">
              <Link to="/signin" className="bg-black text-[#3BC020] p-4" onClick={toggleMenu}>
                Sign In
              </Link>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;