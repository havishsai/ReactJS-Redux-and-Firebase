const initState = {
    authError : null
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            // console.log('Login Failed');
            return {...state,authError: 'Login failed'}
        case 'LOGIN_SUCCESS':
            // console.log('login successful');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Logged Out Successfully");
            return state;
        default:
            return state;
    }
}

export default authReducer
