import { GET_LEADS } from "../actions/types";

const initialState = {
    leads: []
}

export const leads = (state = initialState, action) => {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        default:
            return state;
    }
}