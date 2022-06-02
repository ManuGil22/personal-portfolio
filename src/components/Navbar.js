import '../stylesheets/Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";

function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <>
            <nav id="navbar" className={isNavExpanded ? "navbar expanded" : "navbar"}>
                <div className='hamburger-icon'><GiHamburgerMenu color='white' className='hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded);}} /></div>
                <ul className="nav-list">
                    <li><a href='#home-section' onClick={() => {setIsNavExpanded(false);}}>About</a></li>
                    <li><a href='#work-section' onClick={() => {setIsNavExpanded(false);}}>Work</a></li>
                    <li><a href='#contact-section' onClick={() => {setIsNavExpanded(false);}}>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}


export default Navbar;


