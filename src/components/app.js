import React, { Component } from 'react';
import SerchBar from "../containers/SerchBar";
import WheaterList from "../containers/WheaterList";

export default class App extends Component {
    render() {
        return (
            <div>
                <SerchBar />
                <WheaterList />
            </div>
        );
    }

}