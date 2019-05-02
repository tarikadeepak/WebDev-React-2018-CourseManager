import {SAVE_WIDGETS, ADD_WIDGET, FIND_ALL_WIDGETS, HEADING_SIZE_CHANGED, HEADING_TEXT_CHANGED} from '../constants/index'

export const handleClick = (dispatch, email, password) => {
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
        fetch('http://localhost:8080/login/', {
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

export const handleEmailChange = (dispatch, email) => (
    dispatch({type: 'EMAIL_CHANGE', email: email})
)

export const logout = (dispatch) => (
    dispatch({type: 'LOGOUT'})
)

export const handlePasswordChange = (dispatch, password) => (
    dispatch({type: 'PASSWORD_CHANGE', password: password })
)

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({type: HEADING_SIZE_CHANGED, id: widgetId, size: newSize })
)

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({type: HEADING_TEXT_CHANGED, id: widgetId, text: newText })
)

export const findAllWidgets = dispatch =>{
    fetch('http://localhost:8080/api/widget')
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

export const unDefined = dispatch =>{
    dispatch({type : '@@redux/PROBE_UNKNOWN_ACTION_'})
}