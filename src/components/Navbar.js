import '../stylesheets/Navbar.css'

function Navbar() {
    return(
        <>
            <navbar id="navbar">
                <ul className='nav-list'>
                    <li><a href='#home-section'>About</a></li>
                    <li><a href='#work-section'>Work</a></li>
                    <li><a href='#contact-section'>Contact</a></li>
                </ul>
            </navbar>
        </>
    );
}

export default Navbar;