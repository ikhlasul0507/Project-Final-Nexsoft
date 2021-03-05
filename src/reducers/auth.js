let defaultState = {
    isLogin: false,
    userLogin: {},
    recaptchaResponse : ""
}

// combineReducer
const authReducer = (state = defaultState, action) => {
    console.warn("state:", state);
    console.warn("action:", action);
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                userLogin: action.userData,
                recaptchaResponse : action.recaptchaResponse
            }

        case "LOGOUT_SUCCESS":
            return defaultState
        // @@@INIT
        default:
            return state
    }
    

}
export default authReducer