import React , { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import { Map } from '../components/Map';

function average(array) {
    return _.round(_.sum(array)/array.length,0);
}

class WheaterList extends Component {
    renderWeather(cityData) {

        const name = cityData.city.name;
        const temp = _.map(cityData.list.map(elem => elem.main.temp), temp => temp - 272.15);
        const pressure = cityData.list.map(elem => elem.main.pressure);
        const humidity = cityData.list.map(elem => elem.main.humidity);
        const lat = cityData.city.coord.lat;
        const lng = cityData.city.coord.lon;

        console.log(cityData);
        

        return (
            <tr key={name}>
                <td>
                    <Map 
                        isMarkerShown={false}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `200px`,width:'200px' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        lat={lat}
                        lng={lng}
                    />
                </td>
                <td>
                    <Chart color="red" data={temp} />
                    <div>{`${average(temp)} \u{2103}`}</div>
                </td>
                <td>
                    <Chart color="blue" data={pressure} />
                    <div>{`${average(pressure)} hPa`}</div>
                </td>
                <td>
                    <Chart color="green" data={humidity} />
                    <div>{`${average(humidity)} %`}</div>
                </td>
            </tr>
        )
    }
    render() {
        console.log(this.props.weather);
        
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&#8451;)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.weather.map(this.renderWeather)
                }
                </tbody>
            </table>
        );
    }

}

function mapStateToProps(state){
    const { weather } = state;
    return {
        weather
    }
}
export default connect(mapStateToProps,null)(WheaterList);