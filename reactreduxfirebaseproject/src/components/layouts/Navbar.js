import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from './SignedInLinks'
import SignedOutLink from './SignedOutLinks'
import {connect} from 'react-redux'
 
const Navbar = (props) =>{
    const {auth} = props;
    const links = auth.uid ? <SignedInLink /> : <SignedOutLink />
    return(
        <nav className="navbar-wrapper grey darken-3">
        <div className="container">
            <Link to='/' ><div className="brand-logo">MarioLan</div></Link>
            {links}
        </div>
        </nav>
    )
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)