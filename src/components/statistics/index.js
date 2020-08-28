// @flow
import React from 'react';
import './index.css';

type State = {
    overallHealth: number,
    oxygen: number,
    co2: number,
    light: number,
    nutrition: number
};

type Props = {
    age: number
};

class Stastics extends React.Component<Props, State> {
    state = {
        overallHealth: 100,
        oxygen: 100,
        co2: 100,
        light: 100,
        nutrition: 100
    };

    render() {
        return (
            <div className="Stastics">
                <div className="Statistics-Display">
                    <span>Over-All Health: {this.state.overallHealth}%</span>
                    <span>Oxygen: {this.state.oxygen}%</span>
                    <span>CO2: {this.state.co2}%</span>
                    <span>Light: {this.state.light}%</span>
                    <span>Nutrition: {this.state.nutrition}%</span>
                    <span>Age: {this.props.age}seconds old</span>
                </div>
            </div>
        );
    }
}

export default Stastics;
