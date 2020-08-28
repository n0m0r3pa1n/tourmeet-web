import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as meetingsApi from "../meetings/MeetingsApi";

export const fetchMeeting = createAsyncThunk(
    'meetings/fetchMeeting',
    async (id, thunkAPI) => {
        const response = await meetingsApi.getMeeting(id);
        return response
    }
);

export const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        meeting: {
            title: "",
            dates: [],
            organizers: [],
            images: []
        },
    },
    extraReducers: {
        [fetchMeeting.rejected]: (state, action) => {
            console.log(action)
        },
        [fetchMeeting.fulfilled]: (state, action) => {
            state.meeting = action.payload
        }
    }
});

export default detailsSlice.reducer;