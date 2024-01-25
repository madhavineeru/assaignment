import Header from "../Header";
import ProjectForm from "../ProjectForm";
import ProjectsList from "../ProjectsList";
import Contact from "../Contact";
import './index.css'

const About = () =>(
    <>
   
    <div className="app-container">
    <Header/>
        <div className="about-section">
      
            <div className="content-section">
               <p className="designation">UI/UX Designer</p>
               <h1 className="title">Hello,  my name is Madelyn Torff</h1>
                <p className="subHeadline-text">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                <div className="buttons">
                    <button className="projectBtn">Projects</button>
                    <button className="linkedinBtn">Linkedin</button>
                </div>
                          </div>
            <div className="background-section">
                 <img src="https://res.cloudinary.com/dxisy98pv/image/upload/v1706105662/pexels-artem-beliaikin-1832323-removebg-preview_peq5fk.png" className="bg-img" alt="img"/>
            </div>
        </div>
       
    </div>
    <div className="project-section">
            <ProjectForm/>
        </div>
    <div className="projects">
        <ProjectsList/>
    </div>
    
    <div className="contact-section">
        <Contact/>
    </div>
    </>
    
)
export default About