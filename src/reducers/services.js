import { SERVICES_LIST_REQUEST, SERVICES_LIST_SUCCESS, SERVICES_LIST_FAILURE } from '../actions/actionTypes';

const initialState = {items: [], loadingItems: false, error: null};

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case SERVICES_LIST_REQUEST:
            return {...state, loadingItems: true, error: null,};
        case SERVICES_LIST_FAILURE:
            const {error} = action.payload;
            return {...state, loadingItems: false, error,};
        case SERVICES_LIST_SUCCESS:
            const {items} = action.payload;
            return {...state, items, loadingItems: false, error: null,};
        default:
            return state;
    }
}