export const UserReducer = (state = {userDetails:{id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            typeOfUser: '',
            msg:'',
            loggedIn:false}}, action) => {
            let modifiedState;
    switch (action.type) {
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
            //return modifiedState
             return modifiedState

        case 'LOGOUT': 
            modifiedState = Object.assign({}, state);
            modifiedState.userDetails.loggedIn = false
            return modifiedState
             default:
                console.log('LoginReducer State ', state)
                return state
    }
}