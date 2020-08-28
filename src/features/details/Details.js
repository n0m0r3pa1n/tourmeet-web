import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMeeting} from "../details/detailsSlice";
import Paper from "@material-ui/core/Paper";
import {OrganizersListComponent} from "../organizers/Organizers";
import {formatToDisplayDate} from "../../utils";
import ImageGallery from "react-image-gallery";
import {ImageGalleryStyle} from "./Details.css";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";

const ReactMarkdown = require('react-markdown');

export const DetailsComponent = (props) => {
    const {id} = props.match.params;

    const dispatch = useDispatch();
    const meeting = useSelector(state => state.details.meeting);

    useEffect(() => {
        dispatch(fetchMeeting(id))
    }, [dispatch]);

    const images = meeting.images.map(image => {
        return {original: image, thumbnail: image, renderItem: renderMeetingImage}
    });
    const dates = meeting.dates.map(date => <div key={date}>{formatToDisplayDate(date)}</div>)

    return <div className={"container"}>
        <Paper elevation={4} style={{marginTop: "20px"}}>
            <div>
                <Typography className="text-center" gutterBottom variant="h3" component="h3">
                    {meeting.title}
                </Typography>
                <Typography style={{marginLeft: "20px"}} gutterBottom variant="body1" component={'div'}>
                    {dates}
                </Typography>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.89)", marginTop: "10px"}}>
                    <ImageGallery style={{height: "100px"}} items={images} showPlayButton={false}/>
                </div>
                <div>
                    <div className="row" style={{marginTop: "20px"}}>
                        <div className="col-md-9">
                            <OrganizersListComponent style={{marginTop: "200px"}} organizers={meeting.organizers}/>
                        </div>
                        <div className="offset-md-1">
                            <Button className="col-md-offset-2" color='primary' variant='contained'
                                    href={meeting.url}>Уебсайт</Button>
                        </div>
                    </div>
                    <hr/>
                    <div className="card-text">
                        <h4 style={{marginBottom: "30px"}} className="text-center">Описание:</h4>
                        <ReactMarkdown source={meeting.details}/>
                    </div>
                </div>
            </div>
        </Paper>
    </div>
}

function renderMeetingImage(image) {
    return <img src={image.original} style={ImageGalleryStyle}/>
}