import React from 'react'
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6' >
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-10 w-10' src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">

                <a href="https://twitter.com/"><FaSquareXTwitter /></a>
                <a href="https://github.com/Abhishek3777"><FaGithub /> </a>
                <a href="https://www.linkedin.com/feed/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/"> <FaInstagram /> </a>
            </div>

        </nav>
    )
}

export default Navbar
