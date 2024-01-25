import './index.css'

const ProjectItem = props =>{
    const {projectDetails} = props
    const{
        
        projectName,
        projectLink,
        description,
    } = projectDetails

    return(
        <li className='project-item'>
            <div className='project-container'>
                <h1 className='projectTitle'>{projectName}</h1>
                <p className='project-description'>{description}</p>
                <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href={projectLink};
      }}
>view Project</button>
            </div>
        </li>
    )
}
export default ProjectItem