import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../API/apiSlice'

export const Store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
export type AppStore = typeof Store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']