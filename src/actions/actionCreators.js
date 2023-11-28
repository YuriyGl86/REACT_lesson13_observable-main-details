import { SERVICES_LIST_REQUEST, SERVICES_LIST_SUCCESS, SERVICES_LIST_FAILURE, ITEM_DETAIL_FAILURE, ITEM_DETAIL_REQUEST, ITEM_DETAIL_SUCCESS } from './actionTypes';
    
export const servicesListRequest = () => ({
    type: SERVICES_LIST_REQUEST, payload: {}
});
export const servicesListFailure = error => ({
    type: SERVICES_LIST_FAILURE, payload: {error}
});
export const servicesListSuccess = items => ({
    type: SERVICES_LIST_SUCCESS, payload: {items}
});


export const itemDetailRequest = (id) => ({
    type: ITEM_DETAIL_REQUEST, payload: {id}
});
export const itemDetailFailure = error => ({
    type: ITEM_DETAIL_FAILURE, payload: {error}
});
export const itemDetailSuccess = item => ({
    type: ITEM_DETAIL_SUCCESS, payload: {item}
});