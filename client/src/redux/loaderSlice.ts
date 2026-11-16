import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: 'loader',
    initialState: false,
    reducers: {
        toggleLoader(_state, action: PayloadAction<boolean>) {
            return action.payload;
        }
    }
})

export default loaderSlice.reducer;
export const { toggleLoader } = loaderSlice.actions;