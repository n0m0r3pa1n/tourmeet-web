import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";
import {withRouter} from 'react-router';
import ImageGallery from 'react-image-gallery';
import {ImageGalleryStyle} from "./Meeting.css";
import 'moment/locale/bg';
import {formatToDisplayDate} from "../../utils";
import {OrganizersListComponent} from "../organizers/Organizers";

const ReactMarkdown = require('react-markdown');

const style = {
    marginTop: '10px',
    marginLeft: '30px',
    marginRight: '30px'
};

class Meeting extends Component {

    openDetails(meetingId) {
        this.props.history.push(`/${meetingId}/details`);
    }

    render() {
        const meeting = this.props.meeting;

        const description = meeting.details.trunc(500);
        const images = meeting.images.map(image => {
            return {original: image, thumbnail: image, renderItem: this.renderMeetingImage}
        });

        const dates = meeting.dates.map(date => <div key={date}>{formatToDisplayDate(date)}</div>)

        return (
            <Card className="col-md-3" style={style} elevation={2}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {meeting.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component={'div'}>
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
                        <CardContent>
                            <OrganizersListComponent organizers={meeting.organizers}/>
                        </CardContent>
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