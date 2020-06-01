import React from 'react'
import moment from 'moment'

const ProjectSummary = (props) =>{
    return (
        <div className="card z-depth-0 project-summary" key={props.details.id}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{props.details.title}</span>
                    <p><span className="grey-text">Posted By</span> {props.details.authorFirstName} {props.details.authorLastName}</p>
                    <p className="grey-text">{moment(props.details.created.toDate()).calendar()}</p>
                </div>
            </div>
    )
}
export default ProjectSummary