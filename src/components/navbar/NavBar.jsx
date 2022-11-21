import React,{useState,useEffect} from 'react';
import './NavBar.css';
import logo from './../../assets/logo.svg';
import {GrMenu} from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [smallScreen,setSmallScreen] = useState(false);

  useEffect(() => {
    checkScreenSize();
  }, [])

  
  const checkScreenSize = ()=>{
    const size = window.innerWidth;
    if(size < 768) {
      setSmallScreen(true) 
    }
    else {
      setSmallScreen(false)
    }
  }

  window.addEventListener('resize', checkScreenSize)

  const desktopmenu = ()=>{
    return (
      <>
      <div className="w__navbar__container-menu">
          <ul>
            <Link><li>Service</li></Link>
            <Link><li>About Us</li></Link>
            <Link><li>Pricing</li></Link>
            <Link><li>Blog</li></Link>
            <Link><li>Contact</li></Link>
          </ul>
        </div>
        <div className="w__navbar__container-buttons">
          <Link to='/signin' className='w__navbar__container-buttons-btn1'>Sign in</Link>
          <Link to='signin' className='w__navbar__container-buttons-btn2'>Start Free</Link>
      </div>
      </>
    );
  }

  const mobilemenu = () => {
    return (
    <>
      <div className="w__navbar__container-hammenu" style={{backgroundColor: `${hamOpen ? "#F68572" : "#05796B"}`}} onClick={()=>{setHamOpen(e=>!e)}}>
            <GrMenu size={28} alt="ham menu" />
      </div>
    </>
    );
  }

  const showhammenu = ()=>{
    return (
      <>
      <div className="w__navbar__mobile_menu" style={{height:`${hamOpen ? '100vh': '0'}`}}>
        <div className="w__navbar__mobile_menu-bg" ></div>
        <div className="w__navbar__mobile_menu-menu" >
            <ul>
              <Link><li>Service</li></Link>
              <Link><li>About Us</li></Link>
              <Link><li>Pricing</li></Link>
              <Link><li>Blog</li></Link>
              <Link><li>Contact</li></Link>
            </ul>
            <div className="w__navbar__mobile_menu-buttons">
              <Link className='w__navbar__mobile_menu-buttons-btn1'>Sign in</Link>
              <Link className='w__navbar__mobile_menu-buttons-btn2'>Start Free</Link>
          </div>
        </div>
      </div>
      </>
    );
  }

  return (
    <div className="w__navbar">
      <div className="w__navbar__container">
        <img src={logo} alt="ar shakir" className="g-logo" />
        {smallScreen ? mobilemenu() : desktopmenu()}
      </div>
        {smallScreen ? showhammenu() : <></>}
    </div>
  )
}

export default NavBar