import React, {Component} from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default class TopToolbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Link to={"/"}
                              style={{
                                  color: "rgb(255, 255, 255)",
                                  fontSize: "24px",
                                  marginLeft: "60px",
                                  textDecoration: "none"
                              }}>
                            Хайде на разходка
                        </Link>

                        <Link
                            style={{
                                color: "rgb(255, 255, 255)",
                                fontSize: "18px",
                                marginLeft: "60px",
                                textDecoration: "none"
                            }}
                            to={"/all"}>
                            Срещи
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}