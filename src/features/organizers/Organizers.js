import React from "react";
import Grid from "@material-ui/core/Grid";
import {Avatar} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export const OrganizersListComponent = (props) => {
    const organizers = props.organizers.map(organizer => {
        return <Grid container direction="row" alignItems="center">
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
    });

    return <div>{organizers}</div>
};