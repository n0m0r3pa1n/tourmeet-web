import axios from "axios";
import moment from 'moment';

const SERVER_URL = "http://api.haidenarazhodka.com/";
const SERVER_URL_DEV = "http://localhost:8080/";

export async function getMeetings(fromDate, toDate) {
    fromDate = moment(fromDate).toISOString();
    toDate = moment(toDate).toISOString();
    return axios.get(`${SERVER_URL_DEV}api/meetings/v1?fromDate=${fromDate}&toDate=${toDate}`);
}