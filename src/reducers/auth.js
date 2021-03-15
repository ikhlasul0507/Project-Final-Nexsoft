let defaultState = {
    isLogin: false,
    userLogin: {},
    recaptchaResponse : "",
    isFormActive : false
}

// combineReducer
const authReducer = (state = defaultState, action) => {
    console.warn("state:", state);
    console.warn("action:", action);
    console.warn("form aktif:", state.isFormActive);
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                userLogin: action.userData,
                recaptchaResponse : action.recaptchaResponse,
                isFormActive : true
            }
            
        case "LOGOUT_SUCCESS":
            return defaultState
        // @@@INIT
        case "FORM_ACTIVE":
            return {
                isFormActive : true
            }
        default:
            return state
    }
    

}
export default authReducer