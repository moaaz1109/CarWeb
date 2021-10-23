import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);




  return (
    <>
    

      <div className="top">

      <img src='/img/mar1.jpg' alt='' className='img-lo' />
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               LOGIN
             </Link>
           </li>
          
           <li className='nav-item'>
             <Link
               to='/'
               className='nav-links'
               onClick={closeMobileMenu}
             >
              REGISTER 
             </Link>
           </li>
     </ul>
     </div>
      <nav className='navbar'>
 
 
         <div className='menu-icon' onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <li className='nav-item'>
             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
               KIA
             </Link>
           </li>
          
           <li className='nav-item'>
             <Link
               to='/products'
               className='nav-links'
               onClick={closeMobileMenu}
             >
               BMW
             </Link>
           </li>
           <li className='nav-item'>
             <Link
               to='/camry'
               className='nav-links'
               onClick={closeMobileMenu}
             >
               CAMRY
             </Link>
           </li>
           <li className='nav-item'>
             <Link
               to='/lamprogiry'
               className='nav-links'
               onClick={closeMobileMenu}
             >
              LAMBORGINY
             </Link>
           </li>

           <li className='nav-item'>
             <Link
               to='/accent'
               className='nav-links'
               onClick={closeMobileMenu}
             >
               ACCENT
             </Link>
           </li>
           <li className='nav-item'>
             <Link
               to='/marcides'
               className='nav-links'
               onClick={closeMobileMenu}
             >
              MARCIDES
             </Link>
           </li> 
           <li className='nav-item'>
             <Link
               to='/sonata'
               className='nav-links'
               onClick={closeMobileMenu}
             >
               SONATA
             </Link>
           </li>
           <li className='nav-item'>
             <Link
               to='/contact-us'
               className='nav-links'
               onClick={closeMobileMenu}
             >
              LEXUS
             </Link>
           </li>

           <li className='nav-item'>
             <Link
               to='/gmc'
               className='nav-links'
               onClick={closeMobileMenu}
             >
               GMC
             </Link>
           </li>
          
           </ul>
      </nav>
    </>
  );
}

export default Navbar;
