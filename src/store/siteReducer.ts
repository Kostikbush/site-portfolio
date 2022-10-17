/* eslint-disable no-loop-func */
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type siteState = {
    firstHello: string
}
const initialState: siteState = {
    firstHello: ``,
}

const siteSlice = createSlice({
    name: 'site',
    initialState,
    reducers: {
        alertOnWindow(state){
        }
    }
})
export const {alertOnWindow} = siteSlice.actions;

export default siteSlice.reducer;