import React from 'react';


const style = {
    ul: {
        display: 'flex',
        justifycontent: 'spacebetween',
        color: '#fff',
        minwidth: 300,
        margin: 0,
        padding: 0,
        paddingright: 64,
        paddingleft: 60,
        textdecoration: 'underline',
        fontweight: 'bold',
        fontfamily: 'Work Sans',
    },

    a: {
        color: '#ffffff',
        fontweight: 'bold',
        textdecoration: 'none',

    }

}



function NavBar() {
    return ( 
    <nav>
    <ul style={style.a}>
      <a style={style.a} href="#AboutMe">About</a>
      <a style={style.a} href="#MyWork">My Work</a>
      <a  style={style.a} href="#Projects-Resume">Resume</a>
      <a style={style.a} href="#GetInTouch">Contact</a>
      
    </ul>
  </nav>
    );

}