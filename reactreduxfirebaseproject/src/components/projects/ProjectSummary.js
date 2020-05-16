import React from 'react'

const ProjectSummary = (props) =>{
    return (
        <div className="card z-depth-0 project-summary" key={props.details.id}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{props.details.title}</span>
                    <p>{props.details.title}</p>
                    <p className="grey-text">3rd september,2202</p>
                </div>
            </div>
    )
}
export default ProjectSummary