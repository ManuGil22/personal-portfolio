import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { BsLinkedin, BsWhatsapp, BsGithub, BsFillEnvelopeFill } from 'react-icons/bs'

function App() {
    return (
        <main className="App">
            <Navbar/>
            <div className='home-section' id='home-section'>
                <h1>Hey Im Manuel</h1>
                <h2>a frontend developer</h2>
            </div>
            <div className='work-section' id='work-section'>
                <p className='projects-header'>These are some of my projects</p>
                <div className='projects-container'>
                    <ProjectCard imgSrc={require('./images/calculator.png')} cardTitle="Calculator" githubRepo="https://github.com/ManuGil22/calculator" liveSite="https://manugil22.github.io/calculator/" />
                    <ProjectCard imgSrc={require('./images/todo-list.png')} cardTitle="To-do list" githubRepo="https://github.com/ManuGil22/to-do-list" liveSite="https://manugil22.github.io/to-do-list/" />
                    <ProjectCard imgSrc={require('./images/advice-generator.png')} cardTitle="Advice generator" githubRepo="https://github.com/ManuGil22/advice-generator-app" liveSite="https://manugil22.github.io/advice-generator-app/" />
                </div>
            </div>
            <div className='contact-section'>
                <h2 className='contact-header'>Lets work together...</h2>
                <div className='contact-links'>
                    <a href="https://www.linkedin.com/in/manuel-gil-958687235/"><BsLinkedin className="icon" color='white'/></a>
                    <a href="https://wa.me/5492235951246"><BsWhatsapp className="icon" color='white'/></a>
                    <a href="https://github.com/ManuGil22"><BsGithub className="icon" color='white' /></a>
                    <a href="https://mailto:manuelgilmoltrasio@gmail.com"> <BsFillEnvelopeFill className="icon" color='white' /></a>
                </div>
            </div>
            <footer>
                <div className='footer-divider'></div>
                <p>© Created by Manuel Gil</p>
            </footer>
        </main>
  );
}

export default App;
