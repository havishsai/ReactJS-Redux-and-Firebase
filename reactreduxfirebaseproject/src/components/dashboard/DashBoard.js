import React,{Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
class DashBoard extends Component{
    render(){
        const {auth} = this.props;
        if(!auth.uid){return(<Redirect to='signin'/>)}
        if(!this.props.projectlist){return(<div>No Projects Yet!!!</div>)}
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><ProjectList projectlist={this.props.projectlist}/></div>
                        <div className="col s12 m5 offset-1"><Notifications /></div>
                </div>
            </div>
        )}
    
    }
const MapStatetoProps = (state,ownprops) =>{
    return{
    projectlist:state.firestore.ordered.projects,
    auth:state.firebase.auth
}
}
export default compose(
    connect(MapStatetoProps),
    firestoreConnect([{
        collection:'projects'
    }])
    )(DashBoard)