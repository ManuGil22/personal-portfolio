import '../stylesheets/ProjectCard.css'
import { BsGithub } from 'react-icons/bs'

function ProjectCard({ imgSrc, cardTitle, githubRepo, liveSite }) {
    return(
        <div className='project-card'>
            <img className='card-img' src={imgSrc} alt={`${cardTitle} project screenshot`} />
            <div className='divider'></div>
            <div className='project-info'>
                <a href={liveSite}><h3 className='project-title'>{cardTitle}</h3></a>
                <div className='icons-container'>
                    <a href={githubRepo}><BsGithub id='gh' color='white'/></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;