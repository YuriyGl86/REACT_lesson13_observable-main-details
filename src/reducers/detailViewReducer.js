import { ITEM_DETAIL_FAILURE, ITEM_DETAIL_REQUEST, ITEM_DETAIL_SUCCESS } from '../actions/actionTypes';

const initialState = {item: undefined, loadingDetails: false, error: null};

export default function detailViewReducer(state = initialState, action) {
    switch (action.type) {
        case ITEM_DETAIL_REQUEST:
            return {...state, loadingDetails: true, error: null,};
        case ITEM_DETAIL_FAILURE:
            const {error} = action.payload;
            return {...state, loadingDetails: false, item: undefined, error,};
        case ITEM_DETAIL_SUCCESS:
            const {item} = action.payload;
            return {...state, item, loadingDetails: false, error: null,};
        default:
            return state;
    }
}