import {configureStore} from "@reduxjs/toolkit";
import uuidReducer from "../feature/uuidSlice"

export default configureStore({
    reducer: {
        uuid: uuidReducer
    }
})
