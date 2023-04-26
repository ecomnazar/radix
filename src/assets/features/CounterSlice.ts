import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Count from '../Count'

interface countState{
    count: number
}

const initialState: countState = {
    count: 1
}

export const CounterSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        addToCount: (state, action: PayloadAction<{count: number}>) => {
            state.count += action.payload.count
        }
    }
})



export const { addToCount } = CounterSlice.actions
export default CounterSlice.reducer