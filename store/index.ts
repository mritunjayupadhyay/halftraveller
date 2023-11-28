import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { travelAdvisorApi } from './travelAdvisor/travel-advisor.service'

export const store = configureStore({
    reducer: {
        [travelAdvisorApi.reducerPath]: travelAdvisorApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(travelAdvisorApi.middleware, logger),
})

export type RootState = ReturnType<typeof store.getState>