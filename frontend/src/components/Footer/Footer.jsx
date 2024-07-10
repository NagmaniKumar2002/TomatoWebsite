// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere architecto odio est neque corporis laudantium sed provident assumenda blanditiis molestiae, quibusdam optio doloribus ab quod illo expedita fuga consequuntur officiis possimus! Error, ipsum! Debitis corrupti, quibusdam ea aspernatur quasi perferendis iure asperiores modi neque quis? Officiis quia eligendi sequi provident esse at pariatur, repellat, aperiam aliquam dolore, id odit?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 984848-4848</li>
                <li>Contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024  @ Tomato .com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
