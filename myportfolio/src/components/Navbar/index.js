import React from 'react';
import './style.css';
import './logic.js';





function Navbar() {
    return ( 
      
 
        <nav className='navbar'>
            <h1>DOROTHY GILCHRIST</h1>
            <ul className='navList'>
                <li className='list-item'>
                    <a href="#AboutMe">About</a>
                </li>

                <li className='list-item'>
                    <a href="#MyWork">My Work</a>
                </li>
                <li className='list-item'>
                     <a href="#Projects-Resume">Resume</a>
                </li>
                
                <li className='list-item'>
                    <a  href="#GetInTouch">Contact</a>
                </li>
               
                
            
            </ul>

            <div className='menu' id='toggleMenu'>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>
        </nav>

        
        
    );

}

export default Navbar;