import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux' 
import './projectscss.css'
import { Redirect } from 'react-router-dom'

const ProjectDetails=(props)=> {
    const {project,auth} = props;
    if(!auth.uid){return(<Redirect to='/signin'/>)} 
    if (project){
        return(<div className="section container project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - <strong>{project.title}</strong></span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey projectmetadatatextcolor lighten-4">
                        <div>Posted by <span className="projectmetadatavaluecolor">{project.authorFirstName} {project.authorLastName}</span></div>
                        <div>created on  <span className="projectmetadatavaluecolor">2nd September ,2022</span></div>
                    </div>
                </div>
            </div>
    )
    }
    return (
            <div>
                <div className="section container project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">                        
                        Loading Project Details......
                        </div>
                    </div>
                </div>
            </div>
    )
}
const MapStateToProps = (state,ownProps) =>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects? projects[id] : null;
    return{
        project:project,
        auth:state.firebase.auth
    }
}
export default compose(
    connect(MapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails)