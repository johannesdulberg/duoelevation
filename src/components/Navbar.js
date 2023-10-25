import { Link, animateScroll as scroll, } from 'react-scroll'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import React, { useState, useEffect } from 'react';



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div className={`navbar w-screen h-[80px] z-20 bg-white fixed drop-shadow-lg ${scrolling ? 'scrolling' : ''}`}  >
      <div className='px-2 flex w-full h-full justify-between'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'> DUO ELEVATION</h1>
        </div>
        <div className='flex items-center'>
          <ul className='hidden md:flex items-center'>
          <li ><Link className="hover-underline-animation" to="shows" smooth={true} duration={500}>Shows</Link></li>
          
          <li><Link className="hover-underline-animation" to="about" smooth={true} offset={-50} duration={500}>Über uns</Link></li>
          </ul>
          <div className='hidden md:flex pr-4'>
          <Link className='px-8 ml-4 py-3 button1' to="contact" smooth={true} offset={-50} >Kontakt </Link>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-9' /> : <XMarkIcon className='w-9' />}
          </div>
        </div>
        
        
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="home" smooth={true} duration={500}>Shows</Link></li>
          
          <li className=' bg-white w-full text-center'><Link className='hover-underline-animation' onClick={handleClose} to="about" smooth={true} offset={-50} duration={500}>Über uns</Link></li>
          

        <div className='flex flex-col my-4'>
            <button className='px-8 py-3 button1'>Kontakt</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;