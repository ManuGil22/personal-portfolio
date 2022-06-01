import '../stylesheets/ProjectCard.css'

function ProjectCard({ imgSrc, cardTitle }) {
    return(
        <div className='project-card'>
            <img className='card-img' src={imgSrc} alt={`${cardTitle} project screenshot`} />
            <div className='divider'></div>
            <h3 className='project-title'>{cardTitle}</h3>
        </div>
    );
};

export default ProjectCard;