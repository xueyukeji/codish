import React, {Component} from 'react';
import Router from '../router';
import {Provider} from 'mobx-react';
import store from '../../store';
import {HashRouter, Link} from 'react-router-dom';

import './index.css';

export default class App extends Component {
    render() {
        return (
            <div className="app">hello world;
                <Provider {...store}>
                    <HashRouter>
                        <div>
                            <Link to="/page1">page1</Link>
                            <Link to="/page2">page2</Link>
                            <Router />
                        </div>
                    </HashRouter>
                </Provider>
            </div>
        );
    }
}
