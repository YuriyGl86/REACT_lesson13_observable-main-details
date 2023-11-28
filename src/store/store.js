
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import servicesReducer from '../reducers/services';
import { configureStore } from '@reduxjs/toolkit'
import { servicesListEpic, searviceDetailsEpic } from '../epics/servicesListEpic';
import detailViewReducer from '../reducers/detailViewReducer';
    
const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware]

export const store = configureStore({
    reducer: {
        services: servicesReducer,
        details: detailViewReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})



const epic = combineEpics(servicesListEpic, searviceDetailsEpic);



epicMiddleware.run(epic);


