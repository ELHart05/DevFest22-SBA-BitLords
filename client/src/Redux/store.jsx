import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import storage from 'redux-persist/lib/storage'
import EventSlice from './Slices/EventSlice'
import WorkshopSlice from './Slices/WorkshopSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, EventSlice)
const userReducer = persistReducer(persistConfig, userSlice)
const productReducer = persistReducer(persistConfig, WorkshopSlice)


export const store = configureStore({
    reducer: {
        events: persistedReducer,
        user: userReducer,
        workshop: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


const Persistor = persistStore(store)


export { Persistor }





