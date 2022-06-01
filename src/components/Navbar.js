import '../stylesheets/Navbar.css'

function Navbar() {
    return(
        <>
            <navbar id="navbar">
                <ul className='nav-list'>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Work</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </navbar>
        </>
    );
}

export default Navbar;