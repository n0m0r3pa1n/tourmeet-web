import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";
import {withRouter} from 'react-router';


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

        // const organizers = meeting.organizers.map(organizer => {
        //     const facebookIcon = <FontIcon style={{"fontSize": "18px"}} className="fa fa-facebook-square"/>;
        //     const facebookLink = <div style={{marginTop: "4px"}}>
        //         <a href={`https://www.facebook.com/${organizer.social_id}/events`} target="_blank">{facebookIcon}</a>
        //     </div>;
        //     return <CardHeader
        //         key={organizer._id}
        //         title={organizer.name}
        //         subtitle={facebookLink}
        //         avatar={organizer.profile_picture}
        //     />;
        // });
        const description = meeting.details.trunc(500)


        return (
            <Card style={style}>
                {/*{organizers}*/}
                <CardActionArea>
                    <CardMedia title="Contemplative Reptile">
                        <img height="300px" src={meeting.images[0]} alt=""/>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {meeting.title}
                        </Typography>
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
}

Meeting.propTypes = {
    meeting: PropTypes.object
};

export default withRouter(Meeting);