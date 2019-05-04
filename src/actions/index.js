import {SAVE_WIDGETS, ADD_WIDGET, FIND_ALL_WIDGETS, HEADING_SIZE_CHANGED, HEADING_TEXT_CHANGED} from '../constants/index'

export const handleFirstNameChange = (dispatch, firstName) => {
    console.log("FIRSTNAME CHANGE ", firstName)
    dispatch({type: 'FIRSTNAME_CHANGE', firstName: firstName})
}

export const handleLastNameChange = (dispatch, lastName) => (
    dispatch({type: 'LASTNAME_CHANGE', lastName: lastName})
)

export const handleEmailChange = (dispatch, email) => (
    dispatch({type: 'EMAIL_CHANGE', email: email})
)

export const handlePasswordChange = (dispatch, password) => (
    dispatch({type: 'PASSWORD_CHANGE', password: password })
)

export const handleLogin = (dispatch, email, password) => {
    var payload = {
        id: "",
        firstName: "",
        lastName: "",
        email: email,
        password: password,
        typeOfUser: ""
    }
    
    if (email === "" || password === "") {
        dispatch({type: 'CREDENTIALS_MISSING', email: email, password: password })
    } else {
        fetch('https://webdev-summer-2018-dt.herokuapp.com/login/', {
            method: 'post',
            headers: {
                'content-type': 'application/JSON'
            },
            body: JSON.stringify(payload)
        })
        .then((response)=>response.text())
        .then((text) => (text.length === 2) ? 
                    dispatch({type: 'CREDENTIALS_INVALID', email: email, password: password })
                    : JSON.parse(text))
        .then(payloadResponse => {
            dispatch({type: 'CREDENTIALS_VALID', payloadResponse })
        })
        .catch((error) => {
            console.log('Exception ', error)
            dispatch({type: 'LOGIN_EXCEPTION', error:error})
        })
    }
}

export const handleRegisteration = (dispatch, firstName, lastName, email, password) => {
    var payload = {
        id: "",
        firstName: "",
        lastName: "",
        email: email,
        password: password,
        typeOfUser: ""
    }
    
    if (firstName === "" || lastName === "" || email === "" || password === "") {
        dispatch({type: 'REGISTRATION_MISSING_FIELDS', email: email, password: password })
    } else {
        fetch('https://webdev-summer-2018-dt.herokuapp.com/registration/', {
            method: 'post',
            headers: {
                'content-type': 'application/JSON'
            },
            body: JSON.stringify(payload)
        })
        .then(response => (response.json()))
        .then(payloadResponse => {
          console.log("Response ", payloadResponse)
          if (payloadResponse.length !== 0) {
            alert('User is Registered')
            console.log('Registered ', payloadResponse)
          } else {
            alert('Error occured in Registration')
          }
          window.location.href = 'login'
          this.setState({
            email: "",
            password: "",
            first_name: '',
            last_name: '',
          })
        }
        )
        .catch((error) => {
          console.log(error)
          dispatch({type: 'LOGIN_EXCEPTION', error:error})
        })
    }
}

export const logout = (dispatch) => (
    dispatch({type: 'LOGOUT'})
)

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({type: HEADING_SIZE_CHANGED, id: widgetId, size: newSize })
)

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({type: HEADING_TEXT_CHANGED, id: widgetId, text: newText })
)

export const findAllWidgets = (dispatch, moduleId) =>{
    console.log('Index ', moduleId)
    let url = 'https://webdev-summer-2018-dt.herokuapp.com/api/widget'.concat('/').concat(moduleId);
    fetch(url)
    .then(response => (response.json()))
    .then(widgets => dispatch({
        type:FIND_ALL_WIDGETS,
        widgets: widgets
    }))
}

export const addWidget = dispatch =>{
    dispatch({type : ADD_WIDGET})
}

export const saveWidgets = dispatch =>{
    dispatch({type : SAVE_WIDGETS})
}