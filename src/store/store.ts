import {configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import counterReducer from '@/store/features/counterSlice';


export const makeStore = () =>
    configureStore({
        reducer: {
            counter: counterReducer,
        },
    })

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export const wrapper = createWrapper(makeStore, {debug: true});
