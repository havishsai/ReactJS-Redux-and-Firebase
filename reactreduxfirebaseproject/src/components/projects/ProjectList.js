import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

class ProjectList extends Component{
    render(){
        const projects = this.props.projectlist.map(project=>{
            return(<div key={project.id}><Link to={"/project/"+project.id}> <ProjectSummary details={project}/></Link></div>);
        })
        return(
            <div className="project-list section">
            {projects}
            {/*
                the above constant projects variable need not be created but we can implement directly in return statement as below  
            {this.props.projectlist && this.props.projectlist.map(project=>{return(<ProjectSummary details={project}/>);})} */}
            </div>
        )
    }
}
export default ProjectList