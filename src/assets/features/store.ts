import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "../Counter";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CounterSlice } from "./CounterSlice";
import { newSlice } from "./NewSlice";

export const store = configureStore({
    reducer: {
        person: PersonSlice.reducer,
        count: CounterSlice.reducer,
        slice: newSlice.reducer
    }
})


export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState >> = useSelector