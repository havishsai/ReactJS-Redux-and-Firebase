import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'
const SignedInLinks = (props) =>{
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Post</NavLink></li>
            <li><a href="#" to='' onClick={props.signout}>Log Out</a></li>
            <li><NavLink to='/' className="pink btn btn-floating lighten-1">NN</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps =(dispatch) =>{
    return{
        signout:()=> dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)