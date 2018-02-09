import React, { Component } from 'react';
import SerchBar from "../containers/SerchBar";
import WheaterList from "../containers/WheaterList";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <SerchBar />    
                </div>
                <div className="row">
                    <WheaterList /> 
                </div>
            </div>
        );
    }

}