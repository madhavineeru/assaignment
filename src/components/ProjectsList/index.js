import './index.css'

const ProjectsList = () =>(
<div className='projects-list-container'>
    <div className='projects-details'>
    <div className='project-container'>
                <h1 className='projectTitle'>Wikipedia Search Application</h1>
                <p className='project-description'>Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result</p>
                <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://madhuseacrhapp.ccbp.tech/';
      }}
>view Project</button>
            </div>
    <div className='project-img'>
        <img src='https://res.cloudinary.com/dxisy98pv/image/upload/v1706179073/Capture_t1xzjy.jpg' alt='wikipedia'/>
    </div>
        
       
    

    </div>
</div>
)

export default ProjectsList