import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as meetingsApi from './MeetingsApi'

export const fetchMeetings = createAsyncThunk(
    'meetings/fetchMeetings',
    async (thunkAPI) => {
        const response = await meetingsApi.getMeetings();
        return response.data
    }
);

export const meetingsSlice = createSlice({
    name: 'meetings',
    initialState: {
        value: [],
    },
    extraReducers: {
        [fetchMeetings.rejected]: (sate, action) => {
            console.log(action)
        },
        [fetchMeetings.fulfilled]: (state, action) => {
            state.value = action.payload
        }
    }
});

export default meetingsSlice.reducer;
