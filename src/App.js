import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { BsLinkedin, BsWhatsapp, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs'
import { SiFrontendmentor, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiBootstrap } from 'react-icons/si'
import { FaArrowUp } from 'react-icons/fa'


function handleButtonLogic() {
    var rootElement = document.documentElement;
    
    const stt = function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    }

    const showOnPx = 100;

    const scrollContainer = () => {
        return document.documentElement || document.body;
    };

    document.addEventListener("scroll", () => {
        if (scrollContainer().scrollTop > showOnPx) {
            document.getElementById("scrollToTopBtn").style.display="block";
        } else {
            document.getElementById("scrollToTopBtn").style.display="none";
        }
    })

    return stt;
}    


function App() {

    const scrollToTop = handleButtonLogic();
    
    return (
        <main className="App">
            <Navbar/>
            <div className='home-section' id='home-section'>
                <h1>Hey Im Manuel</h1>
                <h2>a frontend developer</h2>
                <div className='tecnologies-container'>
                    <div className='icon-container'><SiReact color='white' className='tec-icon'/></div>
                    <div className='icon-container'><SiHtml5 color='white' className='tec-icon'/></div>
                    <div className='icon-container'><SiCss3 color='white' className='tec-icon'/></div>
                    <div className='icon-container'><SiJavascript color='white' className='tec-icon'/></div>
                    <div className='icon-container'><SiBootstrap color='white' className='tec-icon'/></div>
                    <div className='icon-container'><SiNodedotjs color='white' className='tec-icon'/></div>
                </div>
            </div>
            <div className='work-section' id='work-section'>
                <p className='projects-header'>These are some of my projects</p>
                <div className='projects-container'>
                    <ProjectCard imgSrc={require('./images/calculator.png')} cardTitle="Calculator" githubRepo="https://github.com/ManuGil22/calculator" liveSite="https://manugil22.github.io/calculator/" />
                    <ProjectCard imgSrc={require('./images/todo-list.png')} cardTitle="To-do list" githubRepo="https://github.com/ManuGil22/to-do-list" liveSite="https://manugil22.github.io/to-do-list/" />
                    <ProjectCard imgSrc={require('./images/advice-generator.png')} cardTitle="Advice generator" githubRepo="https://github.com/ManuGil22/advice-generator-app" liveSite="https://manugil22.github.io/advice-generator-app/" />
                </div>
                <a href="https://www.frontendmentor.io/profile/ManuGil22/solutions" target="_blank" rel="noreferrer" className="btn" id="profile-link">Show all ➜</a>
            </div>
            <div className='contact-section' id='contact-section'>
                <h2 className='contact-header'>Lets work together!</h2>
                <div className='contact-links'>
                    <a href="https://www.linkedin.com/in/manuel-gil-958687235/" target="_blank" rel="noreferrer"><BsLinkedin className="contact-icon" color='white'/></a>
                    <a href="https://wa.me/5492235951246" target="_blank" rel="noreferrer"><BsWhatsapp className="contact-icon" color='white'/></a>
                    <a href="https://github.com/ManuGil22" target="_blank" rel="noreferrer"><BsGithub className="contact-icon" color='white' /></a>
                    <a href="https://mailto:manuelgilmoltrasio@gmail.com" target="_blank" rel="noreferrer"><BsFillEnvelopeFill className="contact-icon" color='white' /></a>
                    <a href="https://www.frontendmentor.io/profile/ManuGil22" target="_blank" rel="noreferrer"><SiFrontendmentor className="contact-icon" color='white' /></a>
                </div>
            </div>
            <button className='hidden' id="scrollToTopBtn" onClick={() => scrollToTop()}><FaArrowUp color='white' id='btn-icon'/></button>
            <footer>
                <div className='footer-divider'></div>
                <p>© Created by Manuel Gil</p>
            </footer>
        </main>
  );
}

export default App;
