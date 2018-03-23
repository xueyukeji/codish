import React, {Component} from 'react';
import {Route} from 'react-router-dom';

export default class Router extends Component {
    render() {
        return (
            <div>
                <Route path="/page1" component={Test1} />
                <Route path="/page2" component={Test2} />
            </div>
        );
    }
}

function Test1() {
    return (
        <div>page1</div>
    );
}

function Test2() {
    return (
        <div>page2</div>
    );
}