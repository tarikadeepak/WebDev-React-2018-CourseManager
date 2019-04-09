
export const handleClick = (dispatch, email, password) => (
    dispatch({type: 'USER_VALIDATION', email: email, password: password })
)

export const handleEmailChange = (dispatch, email) => (
    dispatch({type: 'EMAIL_CHANGE', email: email})
)

export const handlePasswordChange = (dispatch, password) => (
    dispatch({type: 'PASSWORD_CHANGE', password: password })
)