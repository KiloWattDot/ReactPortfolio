import React from 'react';
import './foot-style.css';
import linkedin from './icons/linkedin.png'
import github from './icons/github.png'
import twitter from './icons/twitter.png'



function Footer() {
    // Add a local storage function to temporarily hold submissions
    // Also try to make your own alert pop up w/o 
    const handleClick = () => {


      alert('Thank you! I will get back to you shortly...');
      console.log(`You've been contacted`);
    };




    return (
        <div className='footerArea' >
            <h1 id="title">GET IN TOUCH!</h1>

            <div className='container'>
                <div className='row'>
                    <div className='col-xs-6'>
                        <div className='LeftBox'>
                            <form>
                                <input type="text" id='inputName' placeholder='Name'></input>
                                <input type="text" id='inputEmail' placeholder='Email'></input>
                                <input type="text" id='inputMessage' placeholder='Message'></input>
                                <button type='Submit' onClick={handleClick} className='submitBtn'>Submit</button>

                            </form>
                        </div>

                    </div>

                    <div className='col-xs-6'>
                        <div className='Rightbox'>
                        <h3 id="infoTitle"> Phone</h3>
                            <p id="info" > (404) 344-8884 </p>
                        <h3 id="infoTitle"> Email </h3>
                            <p id="info" > doro.gilchrist@gmail.com</p>
                        <h3 id="infoTitle"> Location </h3>
                            <p id="info" >Atlanta, Georgia </p> 
                            
                        <h3 id="infoTitle"> Social Media</h3>

                        <a href="https://www.linkedin.com/in/dorogilchrist/" target='_blank'>
                            <img src={linkedin} id='linkedin'alt="Linkedin Icon" />
                        </a>
                        <a href="https://github.com/KiloWattDot" target='_blank'>
                            <img src={github} id='github' alt="GitHub Icon" />
                        </a>
                        <a href="https://www.twitter.com/DoroTheDev/" target='_blank'>
                            <img  src={twitter} id='twitter' alt="twitter Icon" />
                        </a>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer;