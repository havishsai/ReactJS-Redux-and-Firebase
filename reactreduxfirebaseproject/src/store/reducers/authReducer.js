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
        case "SIGNUP_SUCCESS":
            console.log('signup success');
            return{
                ...state,
            authError:null
            }
        case "SIGNUP_ERROR":
            console.log("signup error");
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state;
    }
}

export default authReducer
