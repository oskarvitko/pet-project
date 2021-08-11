import { SET_USER } from "../actions/types"

const initialState = {
    user: false
}

const appReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}

export default appReducer