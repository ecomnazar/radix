import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface newSliceItem{
    id: number,
    name: string
}

interface newArrayState{
    persons: newSliceItem[]
}

const initialState: newArrayState = {
    persons: []
}


export const newSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addToList: (state, action: PayloadAction<{name: string}>) => {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name
            })
        }
    }
})

export default newSlice.reducer
export const { addToList } = newSlice.actions