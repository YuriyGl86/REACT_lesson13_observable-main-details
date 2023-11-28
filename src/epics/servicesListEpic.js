import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, switchMap, catchError} from 'rxjs/operators';
import { SERVICES_LIST_REQUEST, ITEM_DETAIL_REQUEST } from '../actions/actionTypes';
import { servicesListSuccess ,servicesListFailure, itemDetailSuccess, itemDetailFailure} from '../actions/actionCreators';



export const servicesListEpic = action$ => action$.pipe(
    ofType(SERVICES_LIST_REQUEST),
    switchMap(() => 
        ajax.getJSON(`${process.env.REACT_APP_SEARVICES_LIST}`)
        .pipe(
            // retry(3),
            map(o => servicesListSuccess(o)),
            catchError(e => of(servicesListFailure(e.message))),
        )
    ),
);


export const searviceDetailsEpic = action$ => action$.pipe(
    ofType(ITEM_DETAIL_REQUEST),
    map(o => o.payload.id),
    switchMap(id => {
        console.log('id внутри', id)
        console.log('запрос', `${process.env.REACT_APP_SEARVICES_LIST}${id}`)
        return ajax.getJSON(`${process.env.REACT_APP_SEARVICES_LIST}${id}`)
        .pipe(
            map(o =>itemDetailSuccess(o)),
            catchError(e => of(itemDetailFailure(e.message))),
        )}
    ),
);