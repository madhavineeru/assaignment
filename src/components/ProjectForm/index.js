import { Component } from "react";
import {v4} from 'uuid'

import ProjectItem from '../ProjectItem'

import './index.css'

class ProjectForm extends Component{
    state = {
        projectName:'',
        projectLink:'',
        description:'',
        projectList:[],
    }
    onAddProject = e =>{
        e.preventDefault()
        const {projectName,projectLink,description} = this.state

        const newProject = {
            id: v4(),
            projectName,
            projectLink,
            description,
        }
        this.setState(prevState =>({
            projectList:[...prevState.projectList, newProject],
            projectName:'',
            projectLink:'',
            description:'',
        }))
    }

    onChangeProjectName = e =>{
        this.setState({
            projectName:e.target.value,
        })
    }

    onChangeProjectLink = e =>{
        this.setState({
            projectLink:e.target.value,
        })
    }

    onChangeProjectDescription = e =>{
        this.setState({
            description:e.target.value,
        })
    }
    
    renderProjects = () =>{
        const {projectList} = this.state
        return(
            projectList.map(eachProject =>(
                <ProjectItem
                key = {eachProject.id}
                projectDetails = {eachProject}
                />
            ))
        )
    }
    

render() {
    const {projectName,projectLink,description} =this.state
    return (
         <div className="project-app-container">
            <h1 className="form-heading">Add Project</h1>
            <div className="project-inputs">
                <form className="form" onSubmit={this.onAddProject}>
                     <label for="projectName">Project Name</label><br/>
                    <input type="text" className="projectName" value={projectName} onChange={this.onChangeProjectName}/>
                    <br/>
                    <label for="projectLink">Project Project Link</label><br/>
                    <input type="text" className="link" value={projectLink} onChange={this.onChangeProjectLink}/>
                    <br/>
                    <label for="description">Description</label><br/>
                    <textarea  className="description" value={description} onChange={this.onChangeProjectDescription}/>
                    
                    <br/>
                    <button type="submit" className="add-button">
                Add 
              </button>
                </form>
            </div>
            <div className="project-section">
                <ul className="project-list">{this.renderProjects()}</ul>
            </div>
         </div>
    );
}
}
export default ProjectForm