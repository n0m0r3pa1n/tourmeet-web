import axios from "axios";
import moment from 'moment';
import * as _ from 'lodash';

let cachedMeetings = []

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export async function getMeetings(fromDate, toDate) {
    fromDate = moment(fromDate).toISOString();
    toDate = moment(toDate).toISOString();

    if (!_.isEmpty(cachedMeetings)) {
        return Promise.resolve(cachedMeetings)
    } else {
        const meetingsRequest = await axios.get(`${SERVER_URL}api/meetings/v1?fromDate=${fromDate}&toDate=${toDate}`);
        cachedMeetings = meetingsRequest.data;
        return Promise.resolve(cachedMeetings)
    }
}

export async function getMeeting(id) {
    let meetings = [];
    if (!_.isEmpty(cachedMeetings)) {
        meetings = cachedMeetings;
    } else {
        const meetingsRequest = await axios.get(`${SERVER_URL}api/meetings/v1`);
        meetings = meetingsRequest.data
    }

    return Promise.resolve(_.first(_.filter(meetings, value => value.id == id)))
}