
export const LoginReducer = (state = {userDetails:{id: "",
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            typeOfUser: '',
            msg: ''}}, action) => {
    let modifiedState;
    switch (action.type) {
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
    
        case 'USER_VALIDATION':
        //Read this
        modifiedState = Object.assign({},state)
        var payload = {
            id: "",
            firstName: "",
            lastName: "",
            email: action.email,
            password: action.password,
            typeOfUser: ""
        }
        console.log('LoginReducer ', action.email)
        console.log('LoginReducer ', action.password)
        if (payload.email === "" || payload.password === "") {
            modifiedState.userDetails.msg = 'Email or password is missing'
            console.log(modifiedState.userDetails.msg)
            return modifiedState;
        } else {
            fetch('http://localhost:8080/login/', {
                method: 'post',
                headers: {
                    'content-type': 'application/JSON'
                },
                body: JSON.stringify(payload)
            })
            .then((response)=>response.json())
            .then(payloadResponse => {
                if (payloadResponse.length !== 0) {
                    modifiedState.userDetails.email         = payloadResponse[0].email
                    modifiedState.userDetails.typeOfUser    = payloadResponse[0].typeOfUser
                    modifiedState.userDetails.id            = payloadResponse[0].id
                    modifiedState.userDetails.password      = payloadResponse[0].password    
                    modifiedState.userDetails.firstName     = payloadResponse[0].firstName
                    modifiedState.userDetails.lastName      = payloadResponse[0].lastName
                    console.log('Response ', payloadResponse[0].email);
                    var urlCourses = '/courses/' + payloadResponse[0].id;
                    window.location.href = urlCourses
                    
                } else {
                    modifiedState.userDetails.msg = 'Invalid credentials'
                }
            }).
            catch((error) => {
                modifiedState.userDetails.msg ='error ' + error
            })
        }
        return modifiedState
        
        default:
            return state
    }
}