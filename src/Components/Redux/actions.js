const actions = {
    SIGNUP: "SIGNUP",
    signup: (username, email, password) => ({
        type: actions.SIGNUP,
        payload: {
            username,
            email,
            password
        }
    })
}
export default actions;