import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as meetingsApi from './MeetingsApi'

export const fetchMeetings = createAsyncThunk(
    'meetings/fetchMeetings',
    async (thunkAPI) => {
        const response = await meetingsApi.getMeetings();
        return response
    }
);

export const meetingsSlice = createSlice({
    name: 'meetings',
    initialState: {
        value: [],
    },
    extraReducers: {
        [fetchMeetings.rejected]: (state, action) => {
            console.log(action)
        },
        [fetchMeetings.fulfilled]: (state, action) => {
            state.value = action.payload
        }
    }
});

export default meetingsSlice.reducer;
