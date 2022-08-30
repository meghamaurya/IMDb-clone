import actions from './actions';

const initialState = { username: '', email: '', password: '' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGNUP:
            return {
                ...state,
                text: action.payload
            }
        default:
            return state;
    }
}
export default reducer;