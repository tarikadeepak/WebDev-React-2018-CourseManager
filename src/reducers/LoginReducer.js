
const initialState = {userDetails:{id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    typeOfUser: '',
    msg:'',
    loggedIn:false
    }
}

export const LoginReducer = (state=initialState, action) => {
    // if (typeof state === 'undefined') {
    //     console.log('Inside Undefined state ', action.type)
    //     return initialState
    //   }
    let modifiedState;
    switch (action.type) {
        case 'LOGOUT': 
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.loggedIn = false
            return modifiedState
            
        case 'CREDENTIALS_MISSING': 
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.msg = 'Email or password is missing'
            return modifiedState
        
        case 'CREDENTIALS_INVALID': 
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.msg = 'Invalid credentials'
            return modifiedState
            
        case 'LOGIN_EXCEPTION': 
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.msg = action.error.message
            return modifiedState
            
        case 'EMAIL_CHANGE':
        console.log('action ', action)
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.email = action.email;
            console.log('EMAIL_CHANGE ', action.email)
            return modifiedState

        case 'PASSWORD_CHANGE':
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.password = action.password;
            console.log('EMAIL_CHANGE ', action.password)
            return modifiedState
    
        case 'CREDENTIALS_VALID':
        //Read this
            modifiedState = Object.assign({},state)
            modifiedState.userDetails.email         = action.payloadResponse[0].email
            modifiedState.userDetails.typeOfUser    = action.payloadResponse[0].typeOfUser
            modifiedState.userDetails.id            = action.payloadResponse[0].id
            modifiedState.userDetails.password      = action.payloadResponse[0].password    
            modifiedState.userDetails.firstName     = action.payloadResponse[0].firstName
            modifiedState.userDetails.lastName      = action.payloadResponse[0].lastName
            modifiedState.userDetails.loggedIn      = true
            console.log('Authentication ', modifiedState.userDetails.lastName, ' ', action.payloadResponse[0].firstName);
             return modifiedState
        
        default:
            console.log('LoginReducer Action ', state)
            return state
    }
}