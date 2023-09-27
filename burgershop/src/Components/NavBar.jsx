// eslint-disable-next-line no-unused-vars
import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

export const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogo} alt="" />
            <div>
                <Link to={"/"}>Anasayfa</Link>
                <Link to={"/menu"}>Menü</Link>
                <Link to={"/about"}>Hakkımızda</Link>
                <Link to={"/contact"}>İletişim</Link>
            </div>
        </div>
    </div>
  )
}
