import '../stylesheets/ProjectCard.css'
import { BsGithub } from 'react-icons/bs'

function ProjectCard({ imgSrc, cardTitle, githubRepo, liveSite }) {
    return(
        <div className='project-card'>
            <img className='card-img' src={imgSrc} alt={`${cardTitle} project screenshot`} />
            <div className='divider'></div>
            <div className='project-info'>
                <div><a href={liveSite} target="_blank" rel="noreferrer" className='project-title'>{cardTitle}</a></div>
                <a href={githubRepo} target="_blank" rel="noreferrer" id="icon-btn"><BsGithub id='gh' color='white'/></a>
            </div>
        </div>
    );
};

export default ProjectCard;