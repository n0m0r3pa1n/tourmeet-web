import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchMeetings} from "./meetingsSlice";
import Meeting from "./Meeting";
import Paper from "@material-ui/core/Paper";
import {ListItemsStyle} from "./Meetings.css";


export const MeetingsComponent = () => {
    const dispatch = useDispatch();
    const meetings = useSelector(state => state.meetings.value);
    useEffect(() => {
        dispatch(fetchMeetings())
    }, [dispatch]);

    const listItems = meetings.map(meeting =>
        <Meeting key={meeting.id} meeting={meeting}/>
    );

    return <Paper style={ListItemsStyle}>
        {listItems}
    </Paper>
};