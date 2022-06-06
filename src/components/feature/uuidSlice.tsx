import {createSlice} from "@reduxjs/toolkit";

export const uuidSlice = createSlice({
    name: "uuid",
    initialState: {
        uuid: "vide",
    },
    reducers: {
        setUuidData: (state, {payload}) => {
            state.uuid = payload
        }
    }
})

export const {setUuidData} = uuidSlice.actions
export default uuidSlice.reducer
