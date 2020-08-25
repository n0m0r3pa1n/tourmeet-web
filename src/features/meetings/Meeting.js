import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Avatar, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";
import {withRouter} from 'react-router';
import ImageGallery from 'react-image-gallery';
import {ImageGalleryStyle} from "./Meeting.css";
import Grid from "@material-ui/core/Grid";
import 'moment/locale/bg';
import {formatToDisplayDate} from "../../utils";

const ReactMarkdown = require('react-markdown');

const style = {
    marginTop: '10px',
    marginLeft: '30px',
    marginRight: '30px',
    width: '30%',
};

class Meeting extends Component {

    openDetails(meetingId) {
        this.props.history.push(`/${meetingId}/details`);
    }

    render() {
        const meeting = this.props.meeting;

        const organizers = meeting.organizers.map(organizer => {
            return <CardContent>
                <Grid container direction="row" alignItems="center">
                    <Grid item>
                        <Avatar style={{marginLeft: 10, marginRight: 10}} alt="Remy Sharp"
                                src={organizer.profilePicture}/>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1" component="h5">
                            {organizer.name}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        });
        const description = meeting.details.trunc(500);
        const images = meeting.images.map(image => {
            return {original: image, thumbnail: image, renderItem: this.renderMeetingImage}
        });

        const dates = <ul>
            {meeting.dates.map(date => <li>{formatToDisplayDate(date)}</li>)}
        </ul>

        return (
            <Card style={style}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {meeting.title}
                    </Typography>
                    <Typography gutterBottom component="body1">
                        {dates}
                    </Typography>
                </CardContent>

                <CardMedia title="Contemplative Reptile">
                    <ImageGallery
                        items={images}
                        showNav={false}
                        showFullscreenButton={false}
                        showPlayButton={false}/>
                </CardMedia>
                <CardActionArea>
                    <CardContent>
                        {organizers}
                        <ReactMarkdown source={description}/>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color='primary' variant='contained'
                            onClick={() => this.openDetails(meeting.id)}>Детайли</Button>
                </CardActions>
            </Card>
        );
    }

    renderMeetingImage(image) {
        return <img style={ImageGalleryStyle} src={image.original}/>
    }
}

Meeting.propTypes = {
    meeting: PropTypes.object
};

export default withRouter(Meeting);