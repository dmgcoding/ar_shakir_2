import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import twitter from './../../assets/icons/twitter.png'
import linkedin from './../../assets/icons/linkedin.png'
import messenger from './../../assets/icons/messenger.png'
import meta from './../../assets/icons/meta.png'
import email from './../../assets/icons/email.png'
import call from './../../assets/icons/call.png'
import logo from './../../assets/logo.svg'
import footerbg from './../../assets/footer-bg.png'


const Footer = () => {
  return (
    <div className="w__footer" style={{backgroundSize: 'cover',backgroundImage: `url(${footerbg})`}}>
      <div className="w__footer__container">
        <div className="w__footer__container-menu">
          <div className="w__footer__container-menu-brand">
            <img style={{height: '2rem', marginTop: '1rem'}} src={logo} alt="logo" />
            <p className="w__footer__container-menu-brand-para">
            Finance helps companies manage payments easily.
            </p>
            <div className="w__footer__container-menu-brand-socials">
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
              <img src={messenger} alt="messenger" />
              <img src={meta} alt="meta" />
            </div>
          </div>
          <div className="w__footer__container-menu-submenu">
            <p className="w__footer__container-menu-submenu-title">
            Company
            </p>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w__footer__container-menu-submenu">
            <p className="w__footer__container-menu-submenu-title">
              Product
            </p>
            <ul>
              <li>Sign in</li>
              <li>Sign up</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w__footer__container-menu-submenu">
            <p className="w__footer__container-menu-submenu-title">
            Resource
            </p>
            <ul>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="w__footer__container-menu-submenu">
            <p className="w__footer__container-menu-submenu-title">
            Contact
            </p>
            <ul>
              <li style={{display:'flex', alignItems: 'center'}}>
                <img style={{height: '1.2rem', marginRight:'0.6rem'}} src={email} alt="email" />
                hello@arshakir.com
              </li>
              <li style={{display:'flex', alignItems: 'center'}}>
                <img style={{height: '1.2rem', marginRight:'0.6rem'}} src={call} alt="call" />
                +94123456789
              </li>
            </ul>
          </div>
        </div>
        <div className="w__footer__container-hr" />
        <div className="w__footer__container-copyrights">
        Copyright <Link>@ AR Shakir</Link> 2022. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer