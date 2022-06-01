import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
    return (
        <main className="App">
            <Navbar/>
                <div className='home-section'>
                    <h1>Hey Im Manuel</h1>
                    <h2>a frontend developer</h2>
                </div>
                <div className='work-section'>
                    <p className='projects-header'>These are some of my projects</p>
                    <div className='projects-container'>
                        <ProjectCard imgSrc={require('./images/todo-list.png')} cardTitle="To-do list"/>
                        <ProjectCard imgSrc={require('./images/calculator.png')} cardTitle="Calculator"/>
                        <ProjectCard imgSrc={require('./images/advice-generator.png')} cardTitle="Advice generator"/>
                    </div>
                </div>
        </main>
  );
}

export default App;
