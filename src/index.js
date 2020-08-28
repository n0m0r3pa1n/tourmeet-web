import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import {createBrowserHistory} from 'history'

import {DetailsComponent} from "./features/details/Details";
import {MeetingsComponent} from "./features/meetings/Meetings";

import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./theme/theme";
import 'bootstrap/dist/css/bootstrap.min.css';

const history = syncHistoryWithStore(createBrowserHistory(), store);

require('./utils');

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router history={history}>
                    <App/>
                    <Switch>
                        <Route exact path="/" component={MeetingsComponent}/>
                        <Route exact path="/:id/details" component={DetailsComponent}/>
                    </Switch>
                </Router>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
